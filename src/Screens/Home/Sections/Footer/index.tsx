import FilledButton from "Components/Buttons/FilledButton";
import Center from "Components/Center";
import CurvedBg from "Components/CurvedBg";
import MaxWidthWrapper from "Components/MaxWidthWrapper";
import { type FC } from "react";
import Flame from "assets/Flame.png";
interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
  return (
    <MaxWidthWrapper
      containerClassName="relative"
      className="min-h-[400px] lg:min-h-[250px]"
    >
      <img
        src={Flame}
        className="absolute top-2 md:top-0 h-[64px] md:h-[120px] aspect-square"
      />
      <div className="left-0 right-0 bottom-0 absolute -z-10 h-full">
        <CurvedBg contentClassName="bg-cf-blue-dark before:bg-cf-blue-dark h-[850px] lg:h-[250px]" />
      </div>
      <Center className="flex-col px-4 md:px-0 pt-10 gap-10 h-full">
        <h1 className="text-white">Stay updated with KC Overseas</h1>
        <Center className="flex-col lg:flex-row gap-5 items-center">
          <input
            className="h-[52px] lg:w-48 w-80 rounded-lg px-4"
            placeholder="Email"
          />
          <select
            className="h-[52px] lg:w-48 w-80 rounded-lg px-4"
            defaultValue={""}
          >
            <option value={""}>I'm Interested in</option>
            <option value={"one"}>One</option>
            <option value={"two"}>Two</option>
            <option value={"three"}>Three</option>
          </select>
          <FilledButton className="w-full lg:w-auto">
            Subscribe Now
          </FilledButton>
        </Center>
      </Center>
    </MaxWidthWrapper>
  );
};

export default Footer;
