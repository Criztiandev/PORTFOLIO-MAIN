/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAnimation, useInView } from "framer-motion";
import React, { FC, PropsWithChildren, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends PropsWithChildren {
  delay?: number;
  duration?: number;
  className?: string;
}

const TextRevealAnimation: FC<Props> = ({ children, className }) => {
  const containerRef = useRef<any>(null);
  const isComponentDisplay = useInView(containerRef, { once: true });
  const textAnimantion = useAnimation();

  const chatacterVariant = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  useEffect(() => {
    if (isComponentDisplay) {
      textAnimantion.start("reveal");
    }
  }, [isComponentDisplay]);

  return (
    <motion.div
      initial="hidden"
      animate={textAnimantion}
      transition={{ staggerChildren: 0.025 }}
      ref={containerRef}
      className={cn("", className)}
    >
      {children
        ?.toString()
        .split("")
        .map((character: string) => (
          <motion.span variants={chatacterVariant}>{character}</motion.span>
        ))}
    </motion.div>
  );
};

export default TextRevealAnimation;
