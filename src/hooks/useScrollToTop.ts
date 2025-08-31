import { useEffect } from "react";
import { animate } from "framer-motion";

export function useScrollToTop() {
  useEffect(() => {
    const animation = animate(window.scrollY, 0, {
      duration: 0.8,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest),
    });

    // cleanup para cancelar animação se o componente desmontar
    return () => {
      animation.stop();
    };
  }, []);
}
