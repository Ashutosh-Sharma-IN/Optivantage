// POST /api/hiring-signal-request
// Handles sample report requests from /ai-lab/hiring-signal-sample.
// Sends an internal notification email to contact@optivantage.in.

import { NextRequest, NextResponse } from 'next/server';
import { sendHiringSignalNotification } from '@/lib/crm/resend';

interface RequestBody {
  name: string;
  email: string;
  phone?: string;
  company: string;
  website?: string;
  serviceYouSell: string;
  targetGeography: string;
  targetCustomerType: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: RequestBody = await req.json();
    const { name, email, company, serviceYouSell, targetGeography, targetCustomerType } = body;

    if (!name || !email || !company || !serviceYouSell || !targetGeography || !targetCustomerType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send internal notification email to contact@optivantage.in
    const result = await sendHiringSignalNotification({
      name,
      email,
      phone: body.phone,
      company,
      website: body.website,
      serviceYouSell,
      targetGeography,
      targetCustomerType,
      message: body.message,
    });

    if (!result.ok) {
      console.error('[hiring-signal-request] email failed:', result.error);
      // Still return success to the user — email failure is an ops issue, not their problem
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[hiring-signal-request] error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
