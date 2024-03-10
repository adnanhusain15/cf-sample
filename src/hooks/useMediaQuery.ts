import { useEffect, useState } from "react";

// Same as set in tailwind.config.cjs
const sm = 720;
const md = 900;
const lg = 1100;
// const xl = 1280;

const useMediaQuery = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isBelowLg: width <= lg,
    isBelowMd: width <= md,
    isSmallDevice: width <= sm,
  };
};

export default useMediaQuery;
