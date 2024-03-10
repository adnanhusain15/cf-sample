import clsx from "clsx";
import { type FC } from "react";
import Button, { IButtonProps } from ".";

interface ITextButtonProps extends IButtonProps {
  contrast?: boolean;
}

const OutlinedButton: FC<ITextButtonProps> = (props) => {
  const { contrast, className, ...restProps } = props;
  return (
    <Button
      className={clsx(
        "border rounded-md",
        { "text-white border-white": contrast },
        className
      )}
      {...restProps}
    >
      {props.children}
    </Button>
  );
};

export default OutlinedButton;
