import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

interface CursorConfig {
  stiffness?: number;
  damping?: number;
  offSet?: number;
}

const useCusorMotion = ({ stiffness = 100, damping = 25 }: CursorConfig) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  // update mouse position

  const springConfig = { damping: damping, stiffness: stiffness };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleUpdateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX - 32);
      cursorY.set(e.clientY - 32);
    };

    window.addEventListener("mousemove", handleUpdateMousePosition);
    return () =>
      window.removeEventListener("mousemove", handleUpdateMousePosition);
  }, [cursorX, cursorY]);

  return { cursorXSpring, cursorYSpring };
};

export default useCusorMotion;
