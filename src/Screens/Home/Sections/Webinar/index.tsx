import TextButton from "Components/Buttons/TextButton";
import Center from "Components/Center";
import MaxWidthWrapper from "Components/MaxWidthWrapper";
import SvgLib from "Components/SvgLib";
import useMediaQuery from "hooks/useMediaQuery";
import { type FC } from "react";
import Card, { IEvent } from "./Card";

interface IWebinarProps {}

const Webinar: FC<IWebinarProps> = () => {
  const { isBelowMd } = useMediaQuery();
  const [event1, event2, event3] = [...Events];
  return (
    <MaxWidthWrapper className="">
      <Center className="text-cf-blue-dark mx-auto max-w-5xl my-10 flex-col gap-10 ">
        <h1 className="text-center">Webinar & Events</h1>
        {isBelowMd ? (
          <div className="w-full overflow-x-auto">
            <div
              className="flex gap-10 h-[600px] py-4"
              style={{ width: 350 * Events.length }}
            >
              {Events.map((item, index) => {
                return (
                  <Card
                    className="w-[300px] h-full"
                    event={item}
                    vertical
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          // null
          <div className="flex gap-10 w-full h-[600px]">
            {event1 ? (
              <Card vertical event={event1} className="basis-1/2 h-full" />
            ) : null}
            {event2 || event3 ? (
              <div className="flex flex-col  gap-10 basis-1/2 h-full">
                {event2 ? (
                  <Card vertical={!event3} event={event2} className="flex-1" />
                ) : null}
                {event3 ? <Card event={event3} className=" flex-1" /> : null}
              </div>
            ) : null}
          </div>
        )}
        <TextButton
          dense
          className="!text-cf-orange"
          endIcon={<SvgLib type="arrow-right" />}
        >
          {`See More`}
        </TextButton>
      </Center>
    </MaxWidthWrapper>
  );
};

export default Webinar;

const Events: IEvent[] = [
  {
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "USA Vertual Addmission Day",
    time: "Mar 19 · 05:00 PM to 07:30 PM",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1682056762907-23d08f913805?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "USA Vertual Addmission Day",
    time: "Mar 19 · 05:00 PM to 07:30 PM",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1682056762907-23d08f913805?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    title: "USA Vertual Addmission Day",
    time: "Mar 19 · 05:00 PM to 07:30 PM",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1682056762907-23d08f913805?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
