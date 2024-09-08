import Xstack from "@/components/layout/container/Xstack";
import YStack from "@/components/layout/container/YStack";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, UserRound, Users } from "lucide-react";

const ProjectCard = () => {
  return (
    <YStack className="flex justify-center items-center flex-col space-y-4 border w-screen shrink-0">
      <div className="rounded-none  h-[300px] w-[300px] border"></div>
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

export default ProjectCard;
