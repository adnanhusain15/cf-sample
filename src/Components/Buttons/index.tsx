import clsx from "clsx";
import { type FC } from "react";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: FC<IButtonProps> = (props) => {
  const { className, startIcon, endIcon, ...restProps } = props;
  return (
    <button
      className={clsx(
        "px-6 py-3.5 rounded-md hover:underline flex gap-2 items-center",
        className
      )}
      {...restProps}
    >
      {startIcon}
      {props.children}
      {endIcon}
    </button>
  );
};

export default Button;
