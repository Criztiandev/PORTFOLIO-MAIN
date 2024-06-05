import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}
const YStack: FC<Props> = ({ children, ...props }) => {
  return (
    <div {...props} className={cn("flex flex-col", props.className)}>
      {children}
    </div>
  );
};

export default YStack;
