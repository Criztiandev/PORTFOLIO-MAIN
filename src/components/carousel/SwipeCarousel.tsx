import { motion, useMotionValue } from "framer-motion";
import { FC, PropsWithChildren, useState } from "react";

const DRAG_BUFFER = 30; // HOW FAR SHOULD I DRAG

const SPRING_OPTION = {
  type: "spring",
  mass: 5,
  stiffness: 200,
  damping: 30,
};

interface Props extends PropsWithChildren {
  size: number;
}

const SwipeCarousel: FC<Props> = ({ size, children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const constraint = {
    left: 0,
    right: 0,
  };

  const dragX = useMotionValue(0);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);

    const x = dragX.get();

    if (x <= -DRAG_BUFFER && itemIndex < size) {
      setItemIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && itemIndex > 0) {
      setItemIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative max-w-screen-xl overflow-hidden">
      <motion.div
        drag="x"
        style={{ x: dragX }}
        transition={SPRING_OPTION}
        dragConstraints={constraint}
        animate={{ translateX: `-${itemIndex * 100}%` }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className="flex items-center cursor-grab active:cursor-grabbing "
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SwipeCarousel;
