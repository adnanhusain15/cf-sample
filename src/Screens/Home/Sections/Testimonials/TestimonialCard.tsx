import SvgLib from "Components/SvgLib";
import { type FC } from "react";
export type ITestimonial = {
  text: string;
  author: string;
  location: string;
};
interface ITestimonialCardProps {
  testimonial: ITestimonial;
}

const TestimonialCard: FC<ITestimonialCardProps> = ({ testimonial }) => {
  const { author, location, text } = testimonial;
  return (
    <div className="bg-white p-6 flex flex-col  h-[400px] rounded-lg mx-4">
      <div>
        <SvgLib type="quote" />
      </div>
      <p className="flex-1 mt-4 sm:mt-10 text-left">{text}</p>
      <p className="font-bold text-left">{author}</p>
      <p className="caption text-left">{location}</p>
    </div>
  );
};

export default TestimonialCard;
