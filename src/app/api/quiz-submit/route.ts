// ─────────────────────────────────────────────────────────────────────────────
// POST /api/quiz-submit
// Receives quiz answers, scores them, pushes lead to HubSpot, sends email.
// ─────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';
import { scoreQuiz } from '@/lib/crm/scoring';
import { upsertContact, scoreToHubSpotProps } from '@/lib/crm/hubspot';
import { sendQuizResultsEmail } from '@/lib/crm/resend';
import type { QuizAnswers } from '@/lib/crm/types';

interface QuizSubmitBody {
  answers: QuizAnswers;
  email: string;
  firstName: string;
  lastName?: string;
  company?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: QuizSubmitBody = await req.json();
    const { answers, email, firstName, lastName, company } = body;

    // Basic validation
    if (!email || !firstName || !answers) {
      return NextResponse.json(
        { error: 'Missing required fields: email, firstName, answers' },
        { status: 400 }
      );
    }

    // 1. Score the quiz
    const score = scoreQuiz(answers);

    // 2. Push to HubSpot (fire-and-forget — don't block the response)
    const hubspotProps = scoreToHubSpotProps(score, 'quiz', {
      email,
      firstname: firstName,
      lastname: lastName ?? '',
      company: company ?? '',
      company_size_bucket: answers.companySize,
      industry_vertical: answers.industry,
      quiz_answers_json: JSON.stringify(answers),
    });

    upsertContact(hubspotProps as Parameters<typeof upsertContact>[0]).catch(
      (err) => console.error('[quiz-submit] HubSpot push failed:', err)
    );

    // 3. Send quiz results email (fire-and-forget)
    const calendlyUrl =
      process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/optivantage';

    sendQuizResultsEmail({
      to: email,
      firstName,
      score: score.total,
      tier: (score.advisoryTier ?? 1) as 1 | 2 | 3,
      insightBullets: score.insightBullets,
      calendlyUrl,
    }).catch((err) =>
      console.error('[quiz-submit] results email failed:', err)
    );

    // 4. Return score to client
    return NextResponse.json({
      ok: true,
      score: score.total,
      tier: score.advisoryTier ?? null,
      primaryPillar: score.primaryPillar,
      qualificationLevel: score.qualificationLevel,
      insightBullets: score.insightBullets,
      ctaText: score.ctaText,
      calendlyUrl,
    });
  } catch (err) {
    console.error('[quiz-submit] error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
