import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Wrapper from "@/components/layout/container/Wrapper";

import HeroImage from "@/assets/image/hero-image.jpg";
import ExperienceSection from "../components/helper/ExperienceSection";
import EducationDetailsSection from "../components/helper/EducationDetailsSection";

const AboutSection = () => {
  return (
    <div className=" max-w-screen-xl mx-auto ">
      <div className="space-y-[48px]">
        <Wrapper className="h-full ">
          <div className=" flex justify-center items-center flex-col gap-4 ">
            <div className="border rounded-full overflow-hidden size-[300px]">
              <Avatar className="flex w-full h-full">
                <AvatarImage src={HeroImage} className="w-full h-full" />
                <AvatarFallback>Criztian</AvatarFallback>
              </Avatar>
            </div>
            <h2 className="text-[42px] font-lovelo">About me</h2>
            <Separator />
            <p className="px-4 text-justify text-base">
              Full-stack developer with a BS in Computer Science degree,
              specializing in MERN stack, PHP, and modern web frameworks.
              Skilled in JavaScript, TypeScript, React Native, and other UI
              libraries. Experienced in managing freelance projects from concept
              to deployment. Passionate about frontend design, backend
              complexity and continuous learning in software development.
            </p>
          </div>
        </Wrapper>

        <div className="">
          <ExperienceSection />
          <EducationDetailsSection />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
