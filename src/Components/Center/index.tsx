import clsx from "clsx";
import React, { PropsWithChildren, type FC } from "react";

interface ICenterProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Center: FC<PropsWithChildren<ICenterProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx("flex justify-center items-center", className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Center;
