/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Wrapper from "@/components/layout/container/Wrapper";
import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useSetAtom } from "jotai";
import { cursorAtom } from "@/service/atoms/utils.atom";

interface Props extends PropsWithChildren {
  duration?: number;
  delay?: number;
}

const ScrolledAnimation: FC<Props> = ({
  delay = 0.25,
  duration = 0.95,
  children,
}) => {
  const containerRef = useRef<any | null>(null);
  const setCursorSize = useSetAtom(cursorAtom);

  const isComponetView = useInView(containerRef, { once: true });
  const mainAnimation = useAnimation();
  const slideAnimation = useAnimation();

  useEffect(() => {
    if (isComponetView) {
      mainAnimation.start("visible");
      slideAnimation.start("visible");
    }
  }, [isComponetView]);

  const handleEnterPerimeter = () => {
    setCursorSize({ width: 200, height: 200, isHovered: true });
  };

  const handleExitPermeter = () => {
    setCursorSize({ width: 64, height: 64, isHovered: false });
  };

  return (
    <section className="relative overflow-hidden ">
      <motion.div
        ref={containerRef}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainAnimation}
        transition={{ duration: 1, delay: delay }}
      >
        <Wrapper
          className="relative flex max-w-screen-xl mx-auto flex-coloverflow-hidden "
          onMouseOver={handleEnterPerimeter}
          onMouseLeave={handleExitPermeter}
        >
          {children}
          <motion.div
            variants={{
              hidden: { left: 0 },
              visible: { left: "100%" },
            }}
            transition={{ duration: duration, delay: delay, ease: "easeIn" }}
            initial="hidden"
            animate={slideAnimation}
            className="absolute border h-full  w-full bg-black z-20"
          ></motion.div>
        </Wrapper>
      </motion.div>
    </section>
  );
};

export default ScrolledAnimation;
