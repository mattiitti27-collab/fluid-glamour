import { useEffect } from "react";

// Smooth inertial scroll that drives the NATIVE window scroll position,
// so window.scrollY stays the source of truth (ScrollProgress, whileInView
// reveals and anchor links keep working). Desktop-only: on touch devices and
// with prefers-reduced-motion we fall back to native scrolling.
const SmoothScroll = () => {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    let target = window.scrollY;
    let current = window.scrollY;
    let rafId = 0;
    let animating = false;
    const ease = 0.09;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const clamp = (v: number) => Math.max(0, Math.min(v, maxScroll()));

    const loop = () => {
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.4) {
        current = target;
        window.scrollTo(0, current);
        animating = false;
        return;
      }
      window.scrollTo(0, current);
      rafId = requestAnimationFrame(loop);
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) return; // let pinch-zoom through
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
      target = clamp((animating ? target : window.scrollY) + delta);
      if (!animating) {
        animating = true;
        current = window.scrollY;
        rafId = requestAnimationFrame(loop);
      }
    };

    // Keep target in sync when the user scrolls by other means
    // (keyboard, scrollbar drag, anchor links).
    const onScroll = () => {
      if (!animating) {
        target = window.scrollY;
        current = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
};

export default SmoothScroll;
