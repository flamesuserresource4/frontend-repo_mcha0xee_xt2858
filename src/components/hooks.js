import { useEffect, useRef, useState } from 'react';

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(media.matches);
    onChange();
    media.addEventListener?.('change', onChange);
    return () => media.removeEventListener?.('change', onChange);
  }, []);
  return reduced;
}

export function useInView(options = { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.unobserve(e.target);
        }
      });
    }, options);
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [options]);
  return { ref, inView };
}

export function trackCTA(label = 'Calendly CTA') {
  try {
    if (window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'CTA',
        event_label: label,
        value: 1,
      });
    }
    if (window.hj && window.hj.event) {
      window.hj('event', 'cta_click');
    }
  } catch (_) {}
}
