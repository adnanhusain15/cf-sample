import clsx from "clsx";
import { type FC } from "react";
import Button, { IButtonProps } from ".";

interface ITextButtonProps extends IButtonProps {
  contrast?: boolean;
  dense?: boolean;
}

const TextButton: FC<ITextButtonProps> = (props) => {
  const { contrast = true, dense = false, className, ...restProps } = props;
  return (
    <Button
      className={clsx(
        {
          "text-white": contrast,
          "text-cf-orange": !contrast,
          "!px-0 !py-2": dense,
        },
        className
      )}
      {...restProps}
    >
      {props.children}
    </Button>
  );
};

export default TextButton;
