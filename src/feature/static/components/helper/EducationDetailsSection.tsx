import Wrapper from "@/components/layout/container/Wrapper";
import YStack from "@/components/layout/container/YStack";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { EducationDataSet } from "../../data/education.data";
import { EducationDataValue } from "../../interface/dataset";

const EducationDetailsSection = () => {
  return (
    <YStack>
      <div>
        <h2 className="text-[32px] font-lovelo text-center ">Education</h2>
        <Separator />
      </div>
      <ul className=" p-4 space-y-8">
        {EducationDataSet.map((education: EducationDataValue) => (
          <li className="space-y-4">
            <Wrapper>
              <h3 className="text-[18px] font-lovelo mb-2">
                {education.course}
              </h3>
              <span className="space-x-4 italic text-gray-500 font-normal">
                <span>{education.location}</span>
                <Badge>{education.sy}</Badge>
              </span>
            </Wrapper>
            {education.keyAchievement.length &&
              education.keyAchievement.length > 0 && (
                <YStack>
                  <span className="font-semibold">Key Achievement</span>
                  <ul className="list-disc pl-8">
                    {education.keyAchievement.map((items) => (
                      <li className="my-2">{items.achievement}</li>
                    ))}
                  </ul>
                </YStack>
              )}
          </li>
        ))}
      </ul>
    </YStack>
  );
};

export default EducationDetailsSection;
