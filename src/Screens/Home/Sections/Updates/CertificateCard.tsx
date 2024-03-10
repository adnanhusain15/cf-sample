import SvgLib from "Components/SvgLib";
import clsx from "clsx";
import { type FC } from "react";

export type TCertificate = {
  img: string;
  instituteName: string;
  certificateTitle: string;
  duration: string;
};
interface ICertificateCardProps {
  certificate: TCertificate;
  className?: string;
}

const CertificateCard: FC<ICertificateCardProps> = ({
  certificate,
  className,
}) => {
  const { certificateTitle, duration, img, instituteName } = certificate;
  return (
    <div
      className={clsx(
        "bg-white flex flex-col items-center rounded-lg shadow-md  p-6",
        className
      )}
    >
      <div className="flex flex-col items-center h-[180px] gap-2">
        <img src={img} className=" h-[100px] aspect-auto object-scale-down" />
        <p className="!text-center caption leading-none">{instituteName}</p>
      </div>
      <div className="mb-6 mt-2">
        <SvgLib type="star-row" />
      </div>
      <h4 className="text-center font-light text-cf-blue">
        {certificateTitle}
      </h4>
      <p className="text-center subtitle text-cf-gray">{duration}</p>
    </div>
  );
};

export default CertificateCard;
