import { useMemo, type FC } from "react";

interface ICarouselProps {
  totalItems: number;
  itemWidth: number;
  internalPadding?: number;
}

const Carousel: FC<ICarouselProps> = ({
  itemWidth,
  totalItems,
  internalPadding = 20,
}) => {
  const width = useMemo(() => {
    return (itemWidth + internalPadding) * totalItems + itemWidth;
  }, [itemWidth, totalItems, internalPadding]);
  return (
    <div className="w-full">
      <div style={{ width }} className="over"></div>
    </div>
  );
};

export default Carousel;
