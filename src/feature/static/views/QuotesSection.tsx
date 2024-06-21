/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, PropsWithChildren } from "react";

import ScrolledAnimation from "@/components/effects/ScrolledAnimation";
import YStack from "@/components/layout/container/YStack";

interface Props extends PropsWithChildren {
  title: string;
}

const QuotesSection: FC<Props> = ({ title, children }) => {
  return (
    <YStack className="my-[400px]  flex px-[120px]">
      <ScrolledAnimation>
        <h2 className="text-[32px] font-holiday ">{title}</h2>
      </ScrolledAnimation>
      <ScrolledAnimation delay={0.5}>
        <h1 className="text-[48px] font-lovelo ">{children}</h1>
      </ScrolledAnimation>
    </YStack>
  );
};

export default QuotesSection;
