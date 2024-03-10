import clsx from "clsx";
import { type FC } from "react";
import Button, { IButtonProps } from ".";

interface ITextButtonProps extends IButtonProps {}

const FilledButton: FC<ITextButtonProps> = (props) => {
  const { className, ...restProps } = props;
  return (
    <Button
      className={clsx("text-white", className)}
      style={{
        background: `linear-gradient(195deg, rgba(255,119,83,1) 0%, rgba(255,155,86,1) 100%)`,
      }}
      {...restProps}
    >
      {props.children}
    </Button>
  );
};

export default FilledButton;
