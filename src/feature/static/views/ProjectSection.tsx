import ScrolledAnimation from "@/components/effects/ScrolledAnimation";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboard,
  IconFileBroken,
  IconSignRight,
  IconTableColumn,
} from "@tabler/icons-react";
import Project1 from "@/assets/image/project-1.png";
import Project2 from "@/assets/image/project-2.png";
import Project3 from "@/assets/image/project-3.png";
import Project4 from "@/assets/image/project-4.png";
import YStack from "@/components/layout/container/YStack";
import { Button } from "@/components/ui/button";

const Skeleton = ({ image }: { image: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem]   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent rounded-md overflow-hidden  dark:border-white/[0.2] bg-neutral-100 dark:bg-black ">
    <img src={image} className="w-full h-full object-cover" />
  </div>
);

const items = [
  {
    title: "SJNHS ADMISSION MANAGEMENT SYSTEM",
    description:
      "A comprehensive web-based application streamlining the admission and registration processes for San Jacinto educational institutions. This system automates application submissions, document management, and applicant evaluations, enhancing efficiency for both staff and prospective students.",
    header: <Skeleton image={Project1} />,
    className: "md:col-span-2 border",
    icon: <IconClipboard className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/Criztiandev/SAN-JACINTO-ADMISSION-MANAGEMENT-SYTEM",
  },
  {
    title: "Arweave Freedom Wall",
    description:
      "A decentralized freedom wall application leveraging Web3 technology and Arweave's permanent storage. Users can express themselves freely, knowing their messages are immutably stored on the blockchain. Features include user authentication via Arweave wallets and a tipping system using AR tokens.",
    header: <Skeleton image={Project4} />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/Criztiandev/ARWEAVE-TODO-FRONTEND",
  },
  {
    title: "Twitter Clone",
    description:
      "A full-stack social media application replicating core Twitter functionalities. Users can post tweets, follow others, like and retweet content, and engage in real-time interactions. The project demonstrates proficiency in building complex, scalable web applications with real-time features.",
    header: <Skeleton image={Project3} />,
    className: "md:col-span-1",
    icon: <IconSignRight className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/Criztiandev/TWITTER-CLONE",
  },
  {
    title: "Villanueva Ecommerce website",
    description:
      "A robust, full-stack e-commerce platform designed for online retail businesses. The application includes features such as user authentication, product catalog management, shopping cart functionality, and an admin panel for inventory and order management.",
    header: <Skeleton image={Project2} />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/Criztiandev/VILLANUEVA-ECOMMERCE-WEBSITE",
  },
];
const ProjectSection = () => {
  const handleClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="">
      <div className="flex  items-center flex-col mb-8">
        <h2 className="text-[24px] font-holiday ">Projects</h2>
        <ScrolledAnimation>
          <h1 className="text-[42px] font-lovelo">Selected Works</h1>
        </ScrolledAnimation>
      </div>

      <BentoGrid className="mx-auto md:auto-rows-[25rem]">
        {items?.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
            onClick={() => handleClick(item.link as string)}
          />
        ))}
      </BentoGrid>

      <YStack className="max-w-[300px] mx-auto my-12">
        <Button onClick={() => handleClick("https://github.com/Criztiandev")}>
          View More Projects
        </Button>
      </YStack>
    </section>
  );
};

export default ProjectSection;
