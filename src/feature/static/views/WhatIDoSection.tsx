import { SkillsDataset } from "../data/skill.data";
import { SkillsData } from "../interface/dataset";

const WhatIDoSection = () => {
  return (
    <section className="relative cursor-default flex justify-center flex-col gap-4 my-[200px] lg:px-[100px]">
      <h2 className="font-holiday text-[24px] px-4">What I do</h2>

      <div className="flex flex-col gap-4 border-t">
        {SkillsDataset.map((skills: SkillsData) => (
          <span className="text-[32px] sm:text-[48px] lg:text-[64px]  font-bold font-lovelo border-b px-4 break-words">
            {skills.title}
          </span>
        ))}
      </div>
    </section>
  );
};

export default WhatIDoSection;
