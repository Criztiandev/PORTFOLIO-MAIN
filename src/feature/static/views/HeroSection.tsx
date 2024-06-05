import Xstack from "@/components/layout/container/Xstack";
import { Button } from "@/components/ui/button";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="h-screen  relative">
      <div className="text-center  h-full flex justify-center items-center flex-col">
        <h2 className="text-[64px] font-holiday ">Hello!</h2>
        <h1 className="text-[130px] font-lovelo">I'M CRIZTIAN</h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0  flex justify-center items-center p-4">
        <Xstack className="gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="opacity-50 hover:opacity-100">
            <Facebook />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="opacity-50 hover:opacity-100">
            <Instagram />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="opacity-50 hover:opacity-100">
            <Linkedin />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="opacity-50 hover:opacity-100">
            <Github />
          </Button>
        </Xstack>
      </div>
    </section>
  );
};

export default HeroSection;
