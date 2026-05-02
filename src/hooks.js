import { useState, useEffect, useRef } from "react";

/**
 * Returns [ref, isVisible] — fires once when element enters viewport.
 */
export function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/**
 * Returns true once the page has scrolled past `offset` px.
 */
export function useScrolled(offset = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return scrolled;
}

/**
 * Cycles through an array of values with a crossfade.
 * Returns [currentIndex, isFadeIn].
 */
export function useCycler(items, interval = 2600) {
  const [idx, setIdx] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % items.length);
        setFadeIn(true);
      }, 300);
    }, interval);
    return () => clearInterval(t);
  }, [items.length, interval]);

  return [idx, fadeIn];
}
