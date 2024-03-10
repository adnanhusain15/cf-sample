import Center from "Components/Center";
import MaxWidthWrapper from "Components/MaxWidthWrapper";
import { useRef, useState, type FC } from "react";
import { Stepper } from "react-form-stepper";
import StepImage from "assets/Step.png";
import TextButton from "Components/Buttons/TextButton";
import SvgLib from "Components/SvgLib";
import useMediaQuery from "hooks/useMediaQuery";
interface IStepsProps {}

const Steps: FC<IStepsProps> = () => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { isSmallDevice } = useMediaQuery();
  const width = isSmallDevice ? 228 : 358;
  const handleNext = () => {
    if (!ref.current || active === steps.length) return;
    ref.current.scrollTo({ left: (active + 1) * width, behavior: "smooth" });
    setActive((e) => e + 1);
  };

  const handlePrev = () => {
    if (!ref.current || !active) return;
    ref.current.scrollTo({ left: (active - 1) * width, behavior: "smooth" });
    setActive((e) => e - 1);
  };

  return (
    <MaxWidthWrapper containerClassName="bg-cf-purple" className="pb-10">
      <Center className="text-cf-blue-dark mx-auto max-w-5xl py-4 flex-col">
        <h1 className="text-center">
          7 Easy Steps to Land in your Dream University
        </h1>
        <div
          ref={ref}
          className="max-w-4xl overflow-x-auto no-scrollbar"
          id="step-container"
        >
          <div className="w-screen sm:w-3xl translate-x-[120px] sm:translate-x-[220px]">
            <Stepper
              activeStep={active}
              connectorStateColors
              // connectorStyleConfig={{ size :2 ,  }}
              // styleConfig={{ size: 50 ,}}
            >
              {/* <div className="h-[200px] w-[220px] sm:w-[350px]" /> */}
              {steps.map((step, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white h-[200px] w-[220px] sm:w-[350px] rounded-lg flex flex-col py-6 items-center gap-2"
                  >
                    <img src={step.img} className="w-[100px] aspect-video" />
                    <h5>{step.title}</h5>
                    <p>{step.desc}</p>
                  </div>
                );
              })}
            </Stepper>
          </div>
        </div>
        <Center className="gap-5">
          <TextButton
            startIcon={<SvgLib type="arrow-left" />}
            contrast={false}
            className="text-"
            onClick={handlePrev}
          >
            Previous
          </TextButton>
          <TextButton
            onClick={handleNext}
            endIcon={<SvgLib type="arrow-right" />}
            contrast={false}
          >
            Next
          </TextButton>
        </Center>
      </Center>
    </MaxWidthWrapper>
  );
};

export default Steps;

const steps: { img: string; title: string; desc: string }[] = [
  {
    img: StepImage,
    desc: "Plan your Academic and Career Goals",
    title: "Counselling",
  },
  {
    img: StepImage,
    desc: "Lorem ipsum dolor sit amet  Debitis, incidunt.",
    title: "Test Preparation",
  },
  {
    img: StepImage,
    desc: " Fugiat quia eum corporis nobis.",
    title: "Test",
  },
  {
    img: StepImage,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    title: "Results",
  },
  {
    img: StepImage,
    desc: "Lorem ipsum dolor sit.",
    title: "Onboarding",
  },
];
