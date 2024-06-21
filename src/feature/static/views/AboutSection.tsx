import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/layout/container/Wrapper";

import HeroImage from "@/assets/image/hero-image.jpg";
import ExperienceSection from "../components/helper/ExperienceSection";
import EducationDetailsSection from "../components/helper/EducationDetailsSection";

const AboutSection = () => {
  return (
    <div className="min-h-screen max-w-screen-xl  mx-auto">
      <div className="grid grid-cols-[40%_auto]">
        <Wrapper className="h-full border-r">
          <div className=" flex justify-center items-center flex-col gap-4 pr-[48px] ">
            <div className="border rounded-full overflow-hidden size-[300px]">
              <Avatar className="flex w-full h-full">
                <AvatarImage src={HeroImage} className="w-full h-full" />
                <AvatarFallback>Criztian</AvatarFallback>
              </Avatar>
            </div>
            <h2 className="text-[48px] font-lovelo">About me</h2>
            <Separator />
            <p className="pl-4">
              By binding methods or using arrow functions, you ensure that this
              points to the correct context, preventing this from being
              undefined at runtime. This should address the error. By binding
              methods or using arrow functions, you ensure that this points to
              the corre.
            </p>
          </div>
        </Wrapper>

        <div className="px-[32px] space-y-[48px]">
          <ExperienceSection />
          <EducationDetailsSection />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
