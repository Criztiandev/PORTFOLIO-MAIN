import Wrapper from "@/components/layout/container/Wrapper";
import Xstack from "@/components/layout/container/Xstack";
import YStack from "@/components/layout/container/YStack";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Star, UserRound, Users } from "lucide-react";

const ProjectSection = () => {
  return (
    <section className="min-h-screen">
      <div className="h-screen flex justify-center items-center flex-col">
        <h2 className="text-[64px] font-holiday ">Projects</h2>
        <h1 className="text-[84px] font-lovelo">Selected Works</h1>
      </div>

      <div>// Ring</div>

      <Wrapper className="flex justify-center items-center flex-col">
        <YStack className="gap-[48px]">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </YStack>
      </Wrapper>
    </section>
  );
};

export default ProjectSection;

const ProjectCard = () => {
  return (
    <YStack className="max-w-[500px] h-[600px] w-full gap-4">
      <Card className="rounded-none h-full"></Card>
      <YStack className=" gap-4 justify-center items-center">
        <h3 className="font-lovelo text-[24px]">DEBESMSCAT Online Clearance</h3>
        <Xstack className="gap-3">
          <Xstack className="gap-2">
            <Calendar />
            <span>2010</span>
          </Xstack>

          <Xstack className="gap-2">
            <Users />
            <span>5,000</span>
          </Xstack>

          <Xstack className="gap-2">
            <Star />
            <span>0</span>
          </Xstack>

          <Xstack className="gap-2">
            <UserRound />
            <span>0</span>
          </Xstack>
        </Xstack>
        <Xstack className="gap-2">
          <Badge>MongDB</Badge>
          <Badge>ExpressJS</Badge>
          <Badge>ReactJS</Badge>
          <Badge>NodeJS</Badge>
        </Xstack>
      </YStack>
    </YStack>
  );
};
