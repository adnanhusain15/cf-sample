import Center from "Components/Center";
import MaxWidthWrapper from "Components/MaxWidthWrapper";
import clsx from "clsx";
import useMediaQuery from "hooks/useMediaQuery";
import { type FC } from "react";
import Slider, { Settings } from "react-slick";
import TestimonialCard, { ITestimonial } from "./TestimonialCard";
interface ITestimonialsProps {}

const Testimonials: FC<ITestimonialsProps> = () => {
  const { isBelowLg } = useMediaQuery();
  const settings: Settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <Arrow action="next" />,
    // prevArrow: <Arrow action="prev" />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <MaxWidthWrapper containerClassName="bg-[#FFDCD8]" className="pb-10">
      <Center className="text-cf-blue-dark mx-auto w-full max-w-6xl py-4 gap-10 flex-col">
        <h1 className="text-center ">Our students love us</h1>
        <div
          className={clsx(
            "w-[80vw] max-w-[80vw] lg:max-w-[1200px]",
            isBelowLg ? "" : "testimonial-container"
          )}
        >
          <Slider {...settings}>
            {Testimonials_Items.map((item, index) => {
              return <TestimonialCard testimonial={item} key={index} />;
            })}
          </Slider>
        </div>
      </Center>
    </MaxWidthWrapper>
  );
};

export default Testimonials;

const Testimonials_Items: ITestimonial[] = [
  {
    text: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    author: "Mandar Suryawanshi",
    location: "Northeastern University, USA",
  },
  {
    text: "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    author: "Aarohi Sighel",
    location: "University of South Australia, Australia",
  },
  {
    text: "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
    author: "Susan Mendonca",
    location: "Conestoga College, Canada",
  },
  {
    text: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    author: "Mandar Suryawanshi",
    location: "Northeastern University, USA",
  },
  {
    text: "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    author: "Aarohi Sighel",
    location: "University of South Australia, Australia",
  },
  {
    text: "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
    author: "Susan Mendonca",
    location: "Conestoga College, Canada",
  },
  {
    text: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
    author: "Mandar Suryawanshi",
    location: "Northeastern University, USA",
  },
  {
    text: "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
    author: "Aarohi Sighel",
    location: "University of South Australia, Australia",
  },
  {
    text: "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
    author: "Susan Mendonca",
    location: "Conestoga College, Canada",
  },
];
