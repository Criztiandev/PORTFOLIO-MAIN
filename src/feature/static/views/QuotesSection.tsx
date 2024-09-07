/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren } from "react";

import ScrolledAnimation from "@/components/effects/ScrolledAnimation";
import YStack from "@/components/layout/container/YStack";

interface Props extends PropsWithChildren {
  title: string;
}

const QuotesSection: FC<Props> = ({ title, children }) => {
  return (
    <YStack className="my-[200px]  flex px-[24px]">
      <h2 className="text-[24px] font-holiday ">{title}</h2>
      <ScrolledAnimation delay={0.5}>
        <h1 className="text-[32px] font-lovelo text-justify ">{children}</h1>
      </ScrolledAnimation>
    </YStack>
  );
};

export default QuotesSection;
