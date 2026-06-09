// ─────────────────────────────────────────────────────────────────────────────
// OptiVantage CRM — Resend Email Wrapper
// ─────────────────────────────────────────────────────────────────────────────

import { Resend } from "resend";

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key || key === "your_resend_api_key_here") return null;
  return new Resend(key);
}

const FROM = process.env.RESEND_FROM_EMAIL ?? "contact@optivantage.in";
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://optivantage.in";

// ─────────────────────────────────────────────
// Quiz results email
// ─────────────────────────────────────────────
export async function sendQuizResultsEmail(params: {
  to: string;
  firstName: string;
  score: number;
  tier: 1 | 2 | 3;
  insightBullets: string[];
  calendlyUrl: string;
}): Promise<{ ok: boolean; error?: string }> {
  const resend = getResend();
  if (!resend) return { ok: true }; // silently skip if not configured

  const tierLabels: Record<1 | 2 | 3, string> = {
    1: "AI Awareness Stage",
    2: "AI Adopter Stage",
    3: "AI Leader Stage",
  };

  const tierNextStep: Record<1 | 2 | 3, string> = {
    1: "An AI Readiness Snapshot (4-week engagement) will give you a clear picture of where you stand and exactly what to do first.",
    2: "An AI Adoption Roadmap (8–12 weeks) will translate your foundations into a phased strategy with vendor evaluation and quick wins.",
    3: "An ongoing Advisory Retainer will keep your AI programme on track with quarterly reviews and direct strategic support.",
  };

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8fafc; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">

    <!-- Header -->
    <div style="background: #0B1120; padding: 32px; text-align: center;">
      <p style="color: #94A3B8; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 8px 0;">OPTIVANTAGE TECHNOLOGIES</p>
      <h1 style="color: #ffffff; font-size: 22px; margin: 0;">Your AI Readiness Score</h1>
    </div>

    <!-- Score Block -->
    <div style="background: #FF4D00; padding: 32px; text-align: center;">
      <p style="color: rgba(255,255,255,0.8); font-size: 14px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 2px;">Your Score</p>
      <p style="color: #ffffff; font-size: 64px; font-weight: 900; margin: 0; line-height: 1;">${params.score}</p>
      <p style="color: rgba(255,255,255,0.9); font-size: 18px; margin: 8px 0 0 0; font-weight: 600;">${tierLabels[params.tier]}</p>
    </div>

    <!-- Content -->
    <div style="padding: 32px;">
      <p style="color: #0B1120; font-size: 16px; margin: 0 0 24px 0;">Hi ${params.firstName},</p>
      <p style="color: #475569; font-size: 15px; line-height: 1.6; margin: 0 0 24px 0;">
        Based on your assessment, here are three things that stand out about where your organisation is on the AI adoption journey:
      </p>

      <!-- Insights -->
      ${params.insightBullets
        .map(
          (b) => `
        <div style="background: #f8fafc; border-left: 4px solid #FF4D00; padding: 16px; border-radius: 4px; margin-bottom: 12px;">
          <p style="color: #0B1120; font-size: 14px; line-height: 1.6; margin: 0;">${b}</p>
        </div>`,
        )
        .join("")}

      <!-- Recommended Next Step -->
      <div style="background: #0B1120; border-radius: 12px; padding: 24px; margin: 24px 0;">
        <p style="color: #94A3B8; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 8px 0;">Recommended Next Step</p>
        <p style="color: #ffffff; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">${tierNextStep[params.tier]}</p>
        <a href="${params.calendlyUrl}"
           style="display: inline-block; background: #FF4D00; color: #ffffff; font-weight: 700; font-size: 14px; padding: 14px 28px; border-radius: 8px; text-decoration: none;">
          Book Your Free Call →
        </a>
      </div>

      <p style="color: #94A3B8; font-size: 13px; line-height: 1.6; margin: 0;">
        We personally review every call request. If you have questions before booking, just reply to this email.<br><br>
        — The Optivantage Team<br>
        OptiVantage Technologies<br>
        <a href="tel:+919540007159" style="color: #FF4D00;">+91 95400 07159</a>
      </p>
    </div>

    <!-- Footer -->
    <div style="background: #f1f5f9; padding: 20px 32px; text-align: center;">
      <p style="color: #94A3B8; font-size: 12px; margin: 0;">
        © 2026 OptiVantage Technologies Pvt Ltd · New Delhi, Delhi<br>
        <a href="${SITE}/unsubscribe?email=${params.to}" style="color: #94A3B8;">Unsubscribe</a>
      </p>
    </div>

  </div>
</body>
</html>`;

  try {
    const { error } = await resend.emails.send({
      from: `Ashutosh at OptiVantage <${FROM}>`,
      to: params.to,
      subject: `Your AI Readiness Score: ${params.score}/100 — ${tierLabels[params.tier]}`,
      html,
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

// ─────────────────────────────────────────────
// Contact form confirmation email
// ─────────────────────────────────────────────
export async function sendContactConfirmation(params: {
  to: string;
  firstName: string;
  service?: string;
}): Promise<{ ok: boolean; error?: string }> {
  const resend = getResend();
  if (!resend) return { ok: true };

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8fafc; margin: 0; padding: 20px;">
  <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden;">
    <div style="background: #0B1120; padding: 28px 32px;">
      <p style="color: #94A3B8; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 4px 0;">OPTIVANTAGE TECHNOLOGIES</p>
      <h2 style="color: #ffffff; font-size: 20px; margin: 0;">We've received your message</h2>
    </div>
    <div style="padding: 32px;">
      <p style="color: #0B1120; font-size: 16px;">Hi ${params.firstName},</p>
      <p style="color: #475569; font-size: 15px; line-height: 1.7;">
        Thank you for reaching out${params.service ? ` about <strong>${params.service}</strong>` : ""}.
        Ashutosh will personally review your message and get back to you within 24 hours.
      </p>
      <p style="color: #475569; font-size: 15px; line-height: 1.7;">
        If you'd prefer to book a time directly, you can use the link below:
      </p>
      <a href="${process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/optivantage"}"
         style="display: inline-block; background: #FF4D00; color: #ffffff; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin: 8px 0 20px 0;">
        Schedule a Call
      </a>
      <p style="color: #94A3B8; font-size: 13px; margin: 0;">
        — The Optivantage Team · OptiVantage Technologies<br>
        <a href="tel:+919540007159" style="color: #FF4D00;">+91 95400 07159</a> ·
        <a href="mailto:contact@optivantage.in" style="color: #FF4D00;">contact@optivantage.in</a>
      </p>
    </div>
  </div>
</body>
</html>`;

  try {
    const { error } = await resend.emails.send({
      from: `Ashutosh at OptiVantage <${FROM}>`,
      to: params.to,
      subject: "We received your message — OptiVantage Technologies",
      html,
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

// ─────────────────────────────────────────────
// Internal notification: Hiring Signal Sample Report request
// Sends to contact@optivantage.in with all form fields
// ─────────────────────────────────────────────
export async function sendHiringSignalNotification(params: {
  name: string;
  email: string;
  phone?: string;
  company: string;
  website?: string;
  serviceYouSell: string;
  targetGeography: string;
  targetCustomerType: string;
  message?: string;
}): Promise<{ ok: boolean; error?: string }> {
  const resend = getResend();
  if (!resend) return { ok: true }; // silently skip if not configured

  const rows = [
    ["Name", params.name],
    ["Email", params.email],
    ["Phone", params.phone || "—"],
    ["Company", params.company],
    ["Company website", params.website || "—"],
    ["Service they sell", params.serviceYouSell],
    ["Target geography", params.targetGeography],
    ["Target customer type", params.targetCustomerType],
    ["Message", params.message || "—"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 14px;font-size:13px;color:#64748B;font-weight:600;width:180px;vertical-align:top;">${label}</td>
          <td style="padding:10px 14px;font-size:14px;color:#0B1120;vertical-align:top;">${value}</td>
        </tr>`,
    )
    .join("");

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8fafc; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
    <div style="background: #0B1120; padding: 24px 32px;">
      <p style="color: #FF4D00; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 6px 0;">OPTIVANTAGE AI LAB</p>
      <h2 style="color: #ffffff; font-size: 18px; margin: 0;">New request: Hiring Signal Sample Report</h2>
    </div>
    <div style="padding: 28px 32px;">
      <p style="color: #475569; font-size: 14px; margin: 0 0 20px 0;">
        A new sample report request has been submitted via <strong>optivantage.in/ai-lab/hiring-signal-sample</strong>.
        Review the details below and send the sample report manually.
      </p>
      <table style="width:100%;border-collapse:collapse;background:#f8fafc;border-radius:8px;overflow:hidden;">
        ${tableRows}
      </table>
      <p style="color: #94A3B8; font-size: 12px; margin: 24px 0 0 0;">
        Submitted at ${new Date().toUTCString()}
      </p>
    </div>
  </div>
</body>
</html>`;

  try {
    const { error } = await resend.emails.send({
      from: `Optivantage AI Lab <${FROM}>`,
      to: "contact@optivantage.in",
      replyTo: params.email,
      subject: "New request: Hiring Signal Sample Report",
      html,
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

// ─────────────────────────────────────────────
// Resource download email (gated download)
// ─────────────────────────────────────────────
export async function sendResourceEmail(params: {
  to: string;
  firstName: string;
  resourceTitle: string;
  resourceUrl: string;
}): Promise<{ ok: boolean; error?: string }> {
  const resend = getResend();
  if (!resend) return { ok: true };

  const html = `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8fafc; margin: 0; padding: 20px;">
  <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden;">
    <div style="background: #0B1120; padding: 28px 32px;">
      <h2 style="color: #ffffff; font-size: 20px; margin: 0;">Your resource is ready</h2>
    </div>
    <div style="padding: 32px;">
      <p style="color: #0B1120; font-size: 16px;">Hi ${params.firstName},</p>
      <p style="color: #475569; font-size: 15px; line-height: 1.7;">
        Here is your copy of <strong>${params.resourceTitle}</strong>:
      </p>
      <a href="${params.resourceUrl}"
         style="display: inline-block; background: #FF4D00; color: #ffffff; font-weight: 700; font-size: 14px; padding: 14px 28px; border-radius: 8px; text-decoration: none; margin: 8px 0 24px 0;">
        Download Now →
      </a>
      <p style="color: #475569; font-size: 14px; line-height: 1.7;">
        If you have questions or want to discuss how this applies to your organisation,
        <a href="${process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/optivantage"}" style="color: #FF4D00;">book a quick call</a> —
        no sales pitch, just a practical conversation.
      </p>
      <p style="color: #94A3B8; font-size: 13px; margin: 0;">
        — The Optivantage Team · OptiVantage Technologies
      </p>
    </div>
  </div>
</body>
</html>`;

  try {
    const { error } = await resend.emails.send({
      from: `Ashutosh at OptiVantage <${FROM}>`,
      to: params.to,
      subject: `Your download: ${params.resourceTitle}`,
      html,
    });
    if (error) return { ok: false, error: error.message };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}
