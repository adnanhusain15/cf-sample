import FilledButton from "Components/Buttons/FilledButton";
import TextButton from "Components/Buttons/TextButton";
import MaxWidthWrapper from "Components/MaxWidthWrapper";
import { type FC } from "react";
// import BG from "assets/background.png";
// import MDBG from "assets/MDBackground.png";
import Center from "Components/Center";
import CurvedBg from "Components/CurvedBg";
import SvgLib from "Components/SvgLib";
import clsx from "clsx";
interface IHeroProps {}

const Hero: FC<IHeroProps> = () => {
  return (
    <MaxWidthWrapper
      //   style={{ backgroundImage: `url(${BG})` }}
      containerClassName="min-h-[450px] relative pt-[86px]"
      className=""
    >
      <div className="left-0 right-0 top-0 absolute -z-10 h-full">
        <CurvedBg
          reverse
          contentClassName={clsx(
            "bg-cf-purple-dark after:bg-cf-purple-dark h-[600px] xs:h-[450px]"
          )}
        />
      </div>
      <div className="mx-auto flex flex-col items-center py-10 gap-5 max-w-2xl">
        <div className="flex items-center gap-1">
          <h5 className="text-cf-purple h5">Home</h5>
          <div className="w-1.5 h-1.5 rounded-full bg-cf-purple" />
          <h5 className="text-white h5">Pune Branch</h5>
        </div>
        <h1 className="text-center h1 text-white">
          KC Overseas Education <br /> Pune
        </h1>
        <p className="text-white">
          We value your career aspirations, which is why we map your preferences
          with the best that our global universities have to offer. Thousands of
          our students are pursuing their programs and aspirations in eminent
          universities globally and we welcome you to pursue yours!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <FilledButton>Enquire Now</FilledButton>
          <TextButton contrast className="flex items-center gap-2">
            <Center className="w-12 h-12 rounded-full bg-white">
              <SvgLib type="arrow-down" />
            </Center>
            Branch Address
          </TextButton>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
