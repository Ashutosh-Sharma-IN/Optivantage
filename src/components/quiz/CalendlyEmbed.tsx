"use client";
import { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script if not already loaded
    if (document.getElementById('calendly-widget-script')) return;
    const script = document.createElement('script');
    script.id = 'calendly-widget-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full rounded-xl overflow-hidden"
      data-url={`${url}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=151e32&text_color=f8fafc&primary_color=FF4D00`}
      style={{ minWidth: '320px', height: '630px' }}
    />
  );
}
