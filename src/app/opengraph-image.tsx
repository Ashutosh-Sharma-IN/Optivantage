import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Optivantage Technologies — AI Training, IT Infrastructure & Equipment Rentals';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0B1120',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Top orange accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #FF4D00, #ff7c40)',
          }}
        />

        {/* Top: logo text + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                background: '#FF4D00',
                borderRadius: '12px',
                padding: '10px 20px',
                fontSize: '22px',
                fontWeight: 900,
                color: '#ffffff',
                letterSpacing: '-0.5px',
              }}
            >
              OV
            </div>
            <span
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.5px',
              }}
            >
              Optivantage Technologies
            </span>
          </div>
          <div
            style={{
              fontSize: '16px',
              color: '#FF4D00',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            Specialist Enterprise IT · India & Online
          </div>
        </div>

        {/* Centre: headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '62px',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-2px',
            }}
          >
            AI. Infrastructure.{' '}
            <span style={{ color: '#FF4D00' }}>Equipment.</span>
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#94a3b8',
              fontWeight: 400,
              lineHeight: 1.4,
              maxWidth: '700px',
            }}
          >
            Three things we do exceptionally well — with 25 years of battle-tested expertise.
          </div>
        </div>

        {/* Bottom: stats row */}
        <div style={{ display: 'flex', gap: '0px' }}>
          {[
            { val: '25+', label: 'Years IT Expertise' },
            { val: '1,000+', label: 'Trained in AI' },
            { val: '15+', label: 'Enterprise Clients' },
            { val: 'Cisco', label: 'Registered Partner' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                paddingRight: '24px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                paddingLeft: i > 0 ? '24px' : '0',
              }}
            >
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#FF4D00' }}>
                {stat.val}
              </div>
              <div style={{ fontSize: '14px', color: '#64748b', fontWeight: 500, marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom orange accent bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'rgba(255,77,0,0.3)',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
