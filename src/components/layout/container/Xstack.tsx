import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}
const Xstack: FC<Props> = ({ children, ...props }) => {
  return (
    <div {...props} className={cn("flex flex-row", props.className)}>
      {children}
    </div>
  );
};

export default Xstack;
