import { useEffect } from 'react';

interface VisitorData {
  page: string;
  timezone: string;
  language: string;
  referrer: string;
  screenResolution: string;
  geo?: {
    latitude?: number;
    longitude?: number;
    accuracy?: number;
  } | null;
}

export function useVisitorTracker() {
  useEffect(() => {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (!isLocal && sessionStorage.getItem('aurora_visitor_tracked')) {
      return;
    }

    const trackVisitor = async () => {
      const data: VisitorData = {
        page: window.location.href,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
        referrer: document.referrer || 'Direct',
        screenResolution: `${window.screen.width}x${window.screen.height}`,
      };

      try {
        await fetch('/api/visitor-online', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        sessionStorage.setItem('aurora_visitor_tracked', 'true');
      } catch (err) {
        console.error('Visitor tracking failed:', err);
      }
    };

    trackVisitor();
  }, []);
}