import { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props extends PropsWithChildren {
  className?: string;
}

const SzoopEffect: FC<Props> = ({ className, children }) => {
  const DURATION = 0.2;
  const STAGGER = 0.025;
  const mainStaggerText = children
    ?.toString()
    .split("")
    .map((letter, index) => {
      if (letter === " ") return <span key={`main-space-${index}`}> </span>;

      return (
        <motion.span
          key={`main-${letter}-${index}`}
          className="inline-block"
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
            exit: { y: 0 },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * index,
          }}
        >
          {letter}
        </motion.span>
      );
    });

  const helperStaggerText = children
    ?.toString()
    .split("")
    .map((letter, index) => {
      if (letter === " ") return <span key={`helper-space-${index}`}> </span>;
      return (
        <motion.span
          key={`helper-${letter}-${index}`}
          className="inline-block"
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
            exit: { y: "100%" },
          }}
          transition={{
            duration: DURATION,
            ease: "easeInOut",
            delay: STAGGER * index,
          }}
        >
          {letter}
        </motion.span>
      );
    });
  return (
    <motion.h1
      initial="initial"
      whileHover="hovered"
      className={cn(
        "relative block overflow-hidden whitespace-nowrap ",
        className
      )}
      style={{ lineHeight: 0.85 }}
    >
      <div>{mainStaggerText}</div>
      <div className="absolute inset-0">{helperStaggerText}</div>
    </motion.h1>
  );
};

export default SzoopEffect;
