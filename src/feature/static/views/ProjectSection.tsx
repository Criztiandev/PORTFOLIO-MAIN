import ScrolledAnimation from "@/components/effects/ScrolledAnimation";
import StackableCarousel from "@/components/carousel/StackableCarousel";
import SwipeCarousel from "@/components/carousel/SwipeCarousel";
import { useScreenDetector } from "@/hooks/useScreenDetector";

const ProjectSection = () => {
  const { isMobile } = useScreenDetector();
  return (
    <section className="">
      <div className="flex  items-center flex-col mb-8">
        <h2 className="text-[24px] font-holiday ">Projects</h2>
        <ScrolledAnimation>
          <h1 className="text-[42px] font-lovelo">Selected Works</h1>
        </ScrolledAnimation>
      </div>

      {isMobile ? (
        <SwipeCarousel size={1}>
          <div className="bg-black w-screen  shrink-0 h-[500px]"></div>
          <div className="bg-green-400 w-screen  shrink-0 h-[500px]"></div>
        </SwipeCarousel>
      ) : (
        <StackableCarousel />
      )}
    </section>
  );
};

export default ProjectSection;
