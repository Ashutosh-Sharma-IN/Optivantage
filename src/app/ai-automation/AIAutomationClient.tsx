'use client';
import { useEffect, useRef } from 'react';

export default function AIAutomationClient() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const setHeight = () => {
      try {
        if (iframe.contentDocument?.documentElement) {
          iframe.style.height = iframe.contentDocument.documentElement.scrollHeight + 'px';
        }
      } catch {
        iframe.style.height = '5000px';
      }
    };

    iframe.addEventListener('load', setHeight);
    window.addEventListener('resize', setHeight);

    return () => {
      iframe.removeEventListener('load', setHeight);
      window.removeEventListener('resize', setHeight);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="/ai-automation.html"
      style={{ width: '100%', minHeight: '100vh', border: 'none', display: 'block' }}
      title="AI Automation Portfolio — Ashutosh Sharma | Make.com Expert"
    />
  );
}
