import YStack from "@/components/layout/container/YStack";
import { Separator } from "@/components/ui/separator";
import { ExperienceDataValue } from "../../interrface/dataset";
import { ExperienceDataSet } from "../../data/experience.data";
import Wrapper from "@/components/layout/container/Wrapper";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <YStack>
      <div>
        <h2 className="text-[48px] font-lovelo ">Experience</h2>
        <Separator />
      </div>
      <ul className="list-disc p-4 space-y-8">
        {ExperienceDataSet.map((experience: ExperienceDataValue) => (
          <li className="space-y-4" key={experience.id}>
            <Wrapper>
              <h3 className="text-[18px] font-lovelo mb-2">
                {experience.title}
              </h3>
              <span className="space-x-4 italic text-gray-500 font-normal">
                <span>{experience.company}</span>
                <Badge>{experience.date}</Badge>
              </span>
            </Wrapper>

            <YStack>
              <span className="font-semibold">Key Acievement</span>
              <ul className="list-disc pl-8">
                {experience.keyAchievement.map((items) => (
                  <li className="my-2">{items.achievement}</li>
                ))}
              </ul>
            </YStack>
          </li>
        ))}
      </ul>
    </YStack>
  );
};

export default ExperienceSection;
