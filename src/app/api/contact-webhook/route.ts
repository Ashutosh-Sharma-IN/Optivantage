// ─────────────────────────────────────────────────────────────────────────────
// POST /api/contact-webhook
// Handles all contact form submissions and the exit-intent popup.
// Pushes to HubSpot + sends Resend confirmation. Keeps Formspree as fallback.
// ─────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server';
import { scoreContactLead, routeServiceInterest } from '@/lib/crm/scoring';
import { upsertContact, scoreToHubSpotProps } from '@/lib/crm/hubspot';
import { sendContactConfirmation, sendResourceEmail } from '@/lib/crm/resend';
import type { LeadSignals } from '@/lib/crm/types';

interface ContactBody {
  // Contact form fields
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  // Exit popup additional fields
  resourceId?: string;
  resourceTitle?: string;
  // Source identifier
  source?: 'contact-form' | 'exit-popup' | 'resource-download';
}

// Resource download links (serve these from /public or a CDN)
const RESOURCE_URLS: Record<string, string> = {
  'wifi-case-study': '/resources/wifi-optimization-case-study.pdf',
  'ai-training-overview': '/resources/ai-training-overview.pdf',
  'network-services-guide': '/resources/network-services-guide.pdf',
  'cybersecurity-checklist': '/resources/cybersecurity-checklist.pdf',
  'ai-advisory-onepager': '/resources/ai-advisory-onepager.pdf',
};

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json();
    const { name, email, phone, company, service, message, resourceId, resourceTitle, source = 'contact-form' } = body;

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Missing required fields: email and name' },
        { status: 400 }
      );
    }

    // Split name into first/last
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ');

    // Detect buying signals from message
    const msgLower = (message ?? '').toLowerCase();
    const mentionedBudget =
      msgLower.includes('budget') || msgLower.includes('cost') || msgLower.includes('price');
    const mentionedTimeline =
      msgLower.includes('soon') ||
      msgLower.includes('quarter') ||
      msgLower.includes('month') ||
      msgLower.includes('urgent') ||
      msgLower.includes('asap');

    // Build lead signals
    const signals: LeadSignals = {
      name,
      email,
      phone,
      company,
      source: source as LeadSignals['source'],
      quizCompleted: false,
      serviceInterest: service,
      message,
      mentionedBudget,
      mentionedTimeline,
      resourceDownloaded: resourceId,
    };

    // Score the lead
    const score = scoreContactLead(signals);

    // Build HubSpot properties
    const hsProps = scoreToHubSpotProps(score, source, {
      email,
      firstname: firstName,
      lastname: lastName,
      phone: phone ?? '',
      company: company ?? '',
      service_interest: service ?? '',
      resource_downloaded: resourceId ?? '',
    });

    // Push to HubSpot (async, non-blocking)
    upsertContact(hsProps as Parameters<typeof upsertContact>[0]).catch(
      (err) => console.error('[contact-webhook] HubSpot push failed:', err)
    );

    // Send confirmation email to lead (async, non-blocking)
    sendContactConfirmation({
      to: email,
      firstName,
      service,
    }).catch((err) =>
      console.error('[contact-webhook] confirmation email failed:', err)
    );

    // If a resource was requested, send the download link too
    if (resourceId && RESOURCE_URLS[resourceId]) {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://optivantage.in';
      sendResourceEmail({
        to: email,
        firstName,
        resourceTitle: resourceTitle ?? resourceId,
        resourceUrl: `${siteUrl}${RESOURCE_URLS[resourceId]}`,
      }).catch((err) =>
        console.error('[contact-webhook] resource email failed:', err)
      );
    }

    return NextResponse.json({
      ok: true,
      pillar: score.primaryPillar,
      qualificationLevel: score.qualificationLevel,
    });
  } catch (err) {
    console.error('[contact-webhook] error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
