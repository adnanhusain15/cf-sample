import { type FC } from "react";
import clsx from "clsx";
import TextButton from "Components/Buttons/TextButton";
import SvgLib from "Components/SvgLib";
export type IEvent = {
  imgUrl: string;
  time: string;
  title: string;
  description: string;
};
interface ICardProps {
  event: IEvent;
  vertical?: boolean;
  className?: string;
}

const Card: FC<ICardProps> = ({ event, vertical = false, className }) => {
  const { imgUrl, time, description, title } = event;

  return (
    <div
      className={clsx(
        "shadow-md rounded-lg flex",
        vertical ? "flex-col" : "",
        className
      )}
    >
      <div className={clsx("", vertical ? "" : "basis-1/3 h-full")}>
        <img
          src={imgUrl}
          className={clsx(
            "object-cover ",
            vertical ? "rounded-t-lg" : "rounded-l-lg h-full"
          )}
        />
      </div>
      <div className="flex flex-col items-start gap-2 text-left p-4 basis-4/6">
        <p className="text-left text-[#226CF5] caption">{time}</p>
        <h4>{title}</h4>
        <p className="text-cf-gray font-light text-left">{description}</p>
        <TextButton
          dense
          className="!text-cf-orange"
          endIcon={<SvgLib type="arrow-right" />}
        >
          {`Register Now`}
        </TextButton>
      </div>
    </div>
  );
};

export default Card;
