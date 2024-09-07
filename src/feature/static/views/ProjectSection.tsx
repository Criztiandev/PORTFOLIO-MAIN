import ScrolledAnimation from "@/components/effects/ScrolledAnimation";
import YStack from "@/components/layout/container/YStack";
import ProjectCard from "../components/card/ProjectCard";

const ProjectSection = () => {
  return (
    <section className="">
      <div className="flex  items-center flex-col mb-8">
        <h2 className="text-[32px] font-holiday ">Projects</h2>
        <ScrolledAnimation>
          <h1 className="text-[48px] font-lovelo">Selected Works</h1>
        </ScrolledAnimation>
      </div>

      <YStack className="gap-[48px] space-y-4">
        <ProjectCard />
      </YStack>
    </section>
  );
};

export default ProjectSection;
