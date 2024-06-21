/* eslint-disable @typescript-eslint/no-explicit-any */

import ScrolledAnimation from "@/components/effects/ScrolledAnimation";
import YStack from "@/components/layout/container/YStack";

const UnderMaintenance = () => {
  return (
    <YStack className="my-[400px]  jflex justify-center items-center">
      <ScrolledAnimation>
        <h2 className="text-[32px] font-holiday ">Im Sorry</h2>
      </ScrolledAnimation>
      <ScrolledAnimation delay={0.5}>
        <h1 className="text-[64px] font-lovelo text-center ">
          This section is under maintenance
        </h1>
      </ScrolledAnimation>
    </YStack>
  );
};

export default UnderMaintenance;
