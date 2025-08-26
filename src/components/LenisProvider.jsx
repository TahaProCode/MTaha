// frontend/src/LenisProvider.jsx
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.05,
      duration: 1.2, // seconds, fixed scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.stop();
    };
  }, []);

  return children;
}
