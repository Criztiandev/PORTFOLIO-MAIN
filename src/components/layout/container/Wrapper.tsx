import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const Wrapper: FC<Props> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default Wrapper;
