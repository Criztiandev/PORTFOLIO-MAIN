import YStack from "@/components/layout/container/YStack";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface TechStackValue {
  id: number;
  logo: string;
  name: string;
  link: string;
}

const TechStackValueList: TechStackValue[] = [
  {
    id: 0,
    logo: "",
    name: "MongDB",
    link: "",
  },
  {
    id: 1,
    logo: "",
    name: "ExpressJS",
    link: "",
  },
  {
    id: 2,
    logo: "",
    name: "ReactJS",
    link: "",
  },
  {
    id: 3,
    logo: "",
    name: "NodeJS",
    link: "",
  },
];

const TechnologiesDetailsSection = () => {
  return (
    <YStack>
      <div>
        <h2 className="text-[48px] font-lovelo ">TECHNOLOGY</h2>
        <Separator />
      </div>

      <div className="flex relative">
        {TechStackValueList.map((tech, i) => {
          const leftPosition = `${i * 48}px`;
          const zIndex = `${i * 10}`;

          return (
            <div
              key={i}
              className={cn(
                `absolute left-[${leftPosition}] size-[64px] border rounded-full z-[${zIndex}] bg-red-500`
              )}
              style={{
                zIndex: i * 5,
              }}
            ></div>
          );
        })}
      </div>
    </YStack>
  );
};

export default TechnologiesDetailsSection;
