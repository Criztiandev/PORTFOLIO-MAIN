import Wrapper from "@/components/layout/container/Wrapper";
import Xstack from "@/components/layout/container/Xstack";
import YStack from "@/components/layout/container/YStack";
import { Button } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  Facebook,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <section className="p-4 flex justify-center max-w-screen-xl mx-auto  items-center flex-col gap-12">
      <Wrapper className="">
        <h2 className="text-[32px] font-holiday text-center">Hey</h2>
        <h1 className="text-[48px] font-lovelo text-center max-w-[700px]">
          Lets build your project
        </h1>
      </Wrapper>

      <Button className="size-[72px] rounded-full" size="icon">
        <BriefcaseBusiness />
      </Button>
      <YStack className="flex justify-center items-center p-4 gap-4">
        <Xstack className="gap-4">
          <Button size="icon" variant="outline" className="rounded-full ">
            <Facebook />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full ">
            <Instagram color="white" fill="black" />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full ">
            <Linkedin />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full ">
            <Github />
          </Button>
        </Xstack>
        <span>C: All rights Reserved 2024, Licensing</span>
      </YStack>
    </section>
  );
};

export default Footer;
