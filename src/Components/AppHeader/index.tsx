import { useEffect, useState, type FC } from "react";
import Logo from "assets/Logo.png";
import MaxWidthWrapper from "Components/MaxWidthWrapper";
import TextButton from "Components/Buttons/TextButton";
import OutlinedButton from "Components/Buttons/OutlinedButton";
import clsx from "clsx";
import useMediaQuery from "hooks/useMediaQuery";
import SvgLib from "Components/SvgLib";
interface IAppHeaderProps {}

const AppHeader: FC<IAppHeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("this run");

      const scrollPosition = window.scrollY;
      const shouldShrink = scrollPosition > 10; // Adjust this value based on when you want the app bar to shrink
      console.log(shouldShrink);
      setIsScrolled(shouldShrink);
    };
    window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  const { isBelowMd } = useMediaQuery();
  return (
    <MaxWidthWrapper
      containerClassName="px-4 bg-cf-purple-dark fixed top-0 z-[1]"
      className={clsx(
        "px-4 flex justify-between transition-[padding] items-center",
        isScrolled ? "py-3 shadow-lg" : "py-4"
      )}
    >
      <img src={Logo} className="h-auto w-48 object-contain" />
      {isBelowMd ? (
        <TextButton contrast className="px-0">
          <SvgLib type="menu" />
        </TextButton>
      ) : (
        <div className="flex">
          {HeaderButtons.map((btn) => {
            return (
              <TextButton contrast key={btn.label}>
                {btn.label}
              </TextButton>
            );
          })}
          <OutlinedButton contrast>Course Finder</OutlinedButton>
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export default AppHeader;

const HeaderButtons: { label: string }[] = [
  {
    label: "Study Destinations",
  },
  {
    label: "Services",
  },
  {
    label: "Company",
  },
  {
    label: "Upcoming Event",
  },
];
