import FilledButton from "Components/Buttons/FilledButton";
import Center from "Components/Center";
import MaxWidthWrapper from "Components/MaxWidthWrapper";
import { type FC } from "react";
import Uni1 from "assets/Uni1.png";
import Uni2 from "assets/Uni2.png";
import CertificateCard, { TCertificate } from "./CertificateCard";
import TextButton from "Components/Buttons/TextButton";
import SvgLib from "Components/SvgLib";
interface IUpdatesProps {}

const Updates: FC<IUpdatesProps> = () => {
  const [cert1, cert2] = Certificates;
  return (
    <MaxWidthWrapper containerClassName="" className="pb-10 ">
      <Center className="mx-auto max-w-5xl py-8 gap-10 flex-col">
        <h1>Latest KC Updates</h1>
        <div className="w-full overflow-x-auto no-scrollbar px-2">
          <div className="flex gap-8 w-[1000px] md:w-auto h-[480px] py-2">
            <div className="p-6 flex flex-col shadow-md bg-[#FDAF4D] w-[80vw] md:w-auto md:basis-[45%] rounded-lg h-full items-start">
              <h1 className="text-left">We’re Hiring!</h1>
              <h4 className="text-left font-normal w-[65%]">
                KC continues recruitments for its offices across India and Asia
                even during the unprecedented times of Covid.
              </h4>

              <div className="flex-1" />
              <FilledButton
                className="!bg-white !text-cf-orange justify-self-end"
                style={{ background: "white" }}
              >
                Apply Now
              </FilledButton>
            </div>
            <CertificateCard
              certificate={cert1}
              className="w-[80vw] md:w-auto md:basis-[25%] h-full"
            />
            <CertificateCard
              certificate={cert2}
              className="w-[80vw] md:w-auto md:basis-[25%] h-full"
            />
          </div>
        </div>
        <TextButton contrast={false} endIcon={<SvgLib type="arrow-right" />}>
          More News{" "}
        </TextButton>
      </Center>
    </MaxWidthWrapper>
  );
};

export default Updates;

const Certificates: TCertificate[] = [
  {
    certificateTitle: "Certified Agents",
    img: Uni1,
    duration: "October 2018 - 2028",
    instituteName: "American International Recruitment Council",
  },
  {
    certificateTitle: "Advanced Agent Certificate",
    img: Uni2,
    duration: "August 2016 - 2018",
    instituteName: "The British Council",
  },
];
