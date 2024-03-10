import clsx from "clsx";
import { PropsWithChildren, type FC } from "react";

interface IMaxWidthWrapperProps {
  className?: string;
  containerClassName?: string;
  style?: React.HTMLAttributes<null>["style"];
}

const MaxWidthWrapper: FC<PropsWithChildren<IMaxWidthWrapperProps>> = ({
  className,
  containerClassName,
  children,
  style,
}) => {
  return (
    <div style={style} className={clsx("w-full", containerClassName)}>
      <div
        className={clsx(
          "px-4 lg:px-0 mx-auto w-full max-w-screen-2xl",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default MaxWidthWrapper;
