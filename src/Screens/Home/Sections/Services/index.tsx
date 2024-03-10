import FilledButton from "Components/Buttons/FilledButton";
import MaxWidthWrapper from "Components/MaxWidthWrapper";
import SvgLib, { ISvg } from "Components/SvgLib";
import { type FC } from "react";
import ServiceImage from "assets/ServiceImage.png";
import Center from "Components/Center";
interface IServicesProps {}

const Services: FC<IServicesProps> = () => {
  return (
    <MaxWidthWrapper containerClassName="" className="pb-10 ">
      <Center className="mx-auto max-w-5xl py-4 gap-10 flex-col">
        <h1 className="text-cf-blue-dark">Services we provide</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {ServiceItems.map((service) => {
            return (
              <div
                key={service.label}
                className="flex items-center gap-3 p-6 shadow-md rounded-xl"
              >
                <SvgLib type={service.icon} />
                <h5 className="text-cf-blue-dark">{service.label}</h5>
              </div>
            );
          })}
        </div>
        <FilledButton>Enquire Now</FilledButton>
        <div className="flex gap-20 justify-center w-full items-center flex-col lg:flex-row text-cf-blue-dark ">
          <div className="bg-[#FFE7C9] flex aspect-square w-[80vw] md:lg:basis-2/5 rounded-xl ">
            <img
              src={ServiceImage}
              className="w-full object-cover rounded-xl aspect-square translate-x-4 translate-y-4"
            />
          </div>
          <div className="flex gap-4 flex-col items-center lg:items-start text-cf-blue-dark basis-3/5 ">
            <h3 className=" lg:text-left text-center">
              Realize your global ambitions with us
            </h3>
            <p className="text-center lg:text-left">
              With a keen ear for your choices and preferences, our counselling
              experience is so seamless that you will land in your dream
              university even before you do!
            </p>
            <div className="flex gap-4 flex-col items-start">
              {GoalItems.map((goal, index) => {
                return (
                  <div key={index} className="flex items-start gap-2">
                    <Center className="w-8 h-8 shadow-md rounded-full bg-white">
                      <SvgLib type="star" />
                    </Center>
                    <p className="text-left">{goal}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Center>
    </MaxWidthWrapper>
  );
};

export default Services;

const ServiceItems: { label: string; icon: ISvg }[] = [
  {
    icon: "finger",
    label: "Test Preparing & Coaching",
  },
  {
    icon: "location",
    label: "Course, Country & University Selection",
  },
  {
    icon: "application",
    label: "Application Assistance",
  },
  {
    icon: "rounded-star",
    label: "Scholarships",
  },
];

const GoalItems = [
  "Virtual & In Person Coaching and Counselling",
  "Comprehensive Assistance for Applications, Admissions & Visas",
  "High Value Scholarships and Study Loans",
];
