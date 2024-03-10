import { type FC } from "react";
import "./styles.css";
import clsx from "clsx";

interface ICurvedBgProps {
  reverse?: boolean;
  contentClassName?: string;
}

const CurvedBg: FC<ICurvedBgProps> = ({ reverse, contentClassName }) => {
  return (
    <div className="m-auto overflow-hidden w-full h-full">
      {reverse ? null : <div className={"bg-header"}></div>}
      <div
        className={clsx(
          contentClassName,
          reverse ? "bg-content-reverse" : "bg-content"
        )}
      ></div>
      {reverse ? <div className={"bg-footer"}></div> : null}
    </div>
  );
};

export default CurvedBg;
