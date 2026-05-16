"use client";
import { useState, useEffect } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────

type PageState = "form" | "analyzing" | "result" | "paying" | "done" | "error";

interface FormData {
  brand: string;
  url: string;
  description: string;
  email: string;
}

interface QueryResult {
  query_id: string;
  query_text: string;
  mentioned: boolean;
  score: number;
}

interface TeaserResult {
  brand: string;
  mention_count: number;
  total_queries: number;
  indicative_score: number;
  band_label: string;
  band_description: string;
  sample_results: QueryResult[];
}

// ── Design tokens (match optivantage.in brand) ─────────────────────────────────

const NAVY   = "#1a2744";
const ORANGE = "#f97316";
const MUTED  = "#64748b";
const BORDER = "#e2e8f0";
const GREEN  = "#16a34a";
const FONT   = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

// ── Main component ─────────────────────────────────────────────────────────────

export default function AeoAuditPage() {
  const [state,    setState]   = useState<PageState>("form");
  const [form,     setForm]    = useState<FormData>({ brand: "", url: "", description: "", email: "" });
  const [result,   setResult]  = useState<TeaserResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const RZP_KEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!;

  // Load Razorpay checkout.js once on mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  // ── Teaser submit ──────────────────────────────────────────────────────────────

  async function handleTeaserSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("analyzing");
    setErrorMsg("");
    try {
      const res = await fetch(`${BACKEND}/api/teaser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ brand: form.brand, description: form.description }),
        signal: AbortSignal.timeout(45_000),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Analysis failed. Please try again.");
      setResult(data);
      setState("result");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  // ── Razorpay checkout ──────────────────────────────────────────────────────────

  async function handlePayment() {
    setState("paying");
    try {
      const orderRes = await fetch(`${BACKEND}/api/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      const order = await orderRes.json();
      if (!orderRes.ok) throw new Error(order.error || "Could not create payment order.");

      const options = {
        key:         RZP_KEY,
        amount:      order.amount,
        currency:    order.currency,
        name:        "Optivantage",
        description: `AEO Visibility Report — ${form.brand}`,
        order_id:    order.id,
        prefill:     { email: form.email },
        theme:       { color: ORANGE },
        handler: async (response: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string }) => {
          const purchaseRes = await fetch(`${BACKEND}/api/purchase`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id:   response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature:  response.razorpay_signature,
              brand:               form.brand,
              url:                 form.url,
              description:         form.description,
              email:               form.email,
            }),
          });
          if (purchaseRes.ok) {
            setState("done");
          } else {
            const err = await purchaseRes.json();
            throw new Error(err.error || "Payment verification failed.");
          }
        },
        modal: { ondismiss: () => setState("result") },
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Payment failed.");
      setState("error");
    }
  }

  // ── Render states ──────────────────────────────────────────────────────────────

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 14px", border: `1px solid ${BORDER}`,
    borderRadius: 8, fontSize: 14, fontFamily: FONT, boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 13, fontWeight: 600, color: NAVY, marginBottom: 6,
  };

  const wrapStyle: React.CSSProperties = {
    maxWidth: 620, margin: "48px auto", padding: "0 24px", fontFamily: FONT,
  };

  if (state === "form" || state === "error") return (
    <div style={wrapStyle}>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: NAVY, marginBottom: 8 }}>
        AEO Visibility Audit
      </h1>
      <p style={{ color: MUTED, marginBottom: 32, lineHeight: 1.6 }}>
        Find out how visible your brand is when people ask AI engines like Perplexity, ChatGPT, and Gemini questions in your category. Free preview in ~20 seconds.
      </p>

      {state === "error" && (
        <div style={{ background: "#fef2f2", border: "1px solid #fca5a5", borderRadius: 8,
                      padding: "12px 16px", marginBottom: 24, color: "#dc2626", fontSize: 14 }}>
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleTeaserSubmit}>
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>Brand name *</label>
          <input required style={inputStyle} placeholder="e.g. Acme Corp"
            value={form.brand} onChange={e => setForm(f => ({ ...f, brand: e.target.value }))} />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>Website URL *</label>
          <input required style={inputStyle} placeholder="e.g. acme.com"
            value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} />
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>
            What does your brand do? *{" "}
            <span style={{ color: "#94a3b8", fontWeight: 400 }}>(5–15 words)</span>
          </label>
          <input required style={inputStyle}
            placeholder="e.g. AI consulting and training for non-technical business professionals"
            value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
        </div>
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>
            Your email *{" "}
            <span style={{ color: "#94a3b8", fontWeight: 400 }}>(for the full report)</span>
          </label>
          <input required type="email" style={inputStyle} placeholder="you@example.com"
            value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
        </div>
        <button type="submit" style={{ width: "100%", padding: "14px 0", background: ORANGE,
          border: "none", borderRadius: 8, color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
          Run Free Preview →
        </button>
      </form>
    </div>
  );

  if (state === "analyzing") return (
    <div style={{ ...wrapStyle, textAlign: "center", marginTop: 96 }}>
      <div style={{ fontSize: 48, marginBottom: 24 }}>🔍</div>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>
        Searching the live web…
      </h2>
      <p style={{ color: MUTED, lineHeight: 1.7 }}>
        Perplexity Sonar is answering 5 queries about <strong>{form.brand}</strong> right now.<br />
        This takes about 20 seconds.
      </p>
    </div>
  );

  if (state === "result" && result) return (
    <div style={wrapStyle}>
      {/* Teaser score card */}
      <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 16,
                    padding: 32, marginBottom: 24 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: ORANGE, textTransform: "uppercase",
                      letterSpacing: ".08em", marginBottom: 8 }}>
          Free Preview — {result.total_queries} Brand-Direct Queries
        </div>
        <div style={{ fontSize: 64, fontWeight: 900, color: NAVY, lineHeight: 1 }}>
          {result.indicative_score}
        </div>
        <div style={{ fontSize: 18, color: MUTED, marginBottom: 4 }}>/100 indicative score</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8 }}>
          {result.band_label}
        </div>
        <div style={{ fontSize: 14, color: MUTED, lineHeight: 1.6, marginBottom: 16 }}>
          {result.band_description}
        </div>
        <div style={{ fontSize: 14, color: "#0f172a", marginBottom: 20 }}>
          <strong>{result.brand}</strong> was mentioned in{" "}
          <strong>{result.mention_count} of {result.total_queries}</strong> direct brand queries.
        </div>
        {result.sample_results.map(r => (
          <div key={r.query_id} style={{ display: "flex", gap: 12, padding: "10px 0",
                                         borderTop: `1px solid #f1f5f9` }}>
            <span style={{ fontSize: 13, fontWeight: 700, minWidth: 24,
                           color: r.mentioned ? GREEN : "#94a3b8" }}>
              {r.mentioned ? "✓" : "—"}
            </span>
            <span style={{ fontSize: 13, color: "#0f172a", lineHeight: 1.5 }}>
              {r.query_text}
            </span>
          </div>
        ))}
      </div>

      {/* Upsell card */}
      <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 16,
                    padding: "28px 32px" }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 8 }}>
          Get the full 25-query report
        </div>
        <div style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 20 }}>
          The full report runs all 25 queries — including 20 category-level questions your
          potential customers are actually asking AI engines. You&apos;ll see exactly where
          your brand shows up (and where it doesn&apos;t), with a score breakdown by query.
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={labelStyle}>Confirm your email</label>
          <input type="email" style={inputStyle} value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
        </div>
        <button onClick={handlePayment} style={{ width: "100%", padding: "14px 0",
          background: NAVY, border: "none", borderRadius: 8, color: "#fff",
          fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
          Get Full Report — ₹3,499 →
        </button>
        <div style={{ fontSize: 12, color: "#94a3b8", textAlign: "center", marginTop: 10 }}>
          Secure payment via Razorpay · Report emailed in ~5 minutes
        </div>
      </div>
    </div>
  );

  if (state === "paying") return (
    <div style={{ ...wrapStyle, textAlign: "center", marginTop: 96 }}>
      <div style={{ fontSize: 48, marginBottom: 24 }}>⏳</div>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>
        Completing payment…
      </h2>
      <p style={{ color: MUTED }}>Please don&apos;t close this window.</p>
    </div>
  );

  if (state === "done") return (
    <div style={{ ...wrapStyle, textAlign: "center", marginTop: 96 }}>
      <div style={{ fontSize: 48, marginBottom: 24 }}>✅</div>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: NAVY, marginBottom: 12 }}>
        Your report is on its way!
      </h2>
      <p style={{ color: MUTED, lineHeight: 1.7, marginBottom: 8 }}>
        Your full 25-query AEO report for <strong>{form.brand}</strong> is being generated now.
      </p>
      <p style={{ color: MUTED, lineHeight: 1.7 }}>
        We&apos;ll email it to <strong>{form.email}</strong> in about 3–5 minutes.
      </p>
    </div>
  );

  return null;
}
