import ScrolledAnimation from "@/components/effects/ScrolledAnimation";
import SzoopEffect from "@/components/effects/SzoopEffect";
import Xstack from "@/components/layout/container/Xstack";
import { Button } from "@/components/ui/button";
import { cursorAtom } from "@/service/atoms/utils.atom";
import { useSetAtom } from "jotai";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const HeroSection = () => {
  const setCursorSize = useSetAtom(cursorAtom);

  const handleEnterPerimeter = () => {
    setCursorSize({ width: 200, height: 200, isHovered: true });
  };

  const handleExistPerimeter = () => {
    setCursorSize({ width: 64, height: 64, isHovered: false });
  };
  return (
    <section className="h-screen  relative cursor-default">
      <div className="text-center  h-full flex justify-center items-center flex-col ">
        <div
          onMouseOver={handleEnterPerimeter}
          onMouseLeave={handleExistPerimeter}
        >
          <h2 className="text-[32px] md:text-[48px] font-holiday text-center  w-full">
            Hello!
          </h2>
          <ScrolledAnimation delay={0.5}>
            <SzoopEffect className="font-lovelo text-[60px] md:text-[100px]">
              I'M CRIZTIAN
            </SzoopEffect>
          </ScrolledAnimation>
        </div>
      </div>

      <div className="absolute bottom-32 left-0 right-0  flex justify-center items-center p-4">
        <Xstack className="gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="opacity-50 hover:opacity-100"
          >
            <Facebook />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="opacity-50 hover:opacity-100"
          >
            <Instagram />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="opacity-50 hover:opacity-100"
          >
            <Linkedin />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="opacity-50 hover:opacity-100"
          >
            <Github />
          </Button>
        </Xstack>
      </div>
    </section>
  );
};

export default HeroSection;
