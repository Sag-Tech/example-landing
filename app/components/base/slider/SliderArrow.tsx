import cn from "classnames";
import LazyImage from "~/components/LazyImage";

type Props = {
  isReversed?: boolean;
  className?: string;
  onClick: () => void;
};

function SliderArrow({ onClick, isReversed, className }: Props) {
  return (
    <button
      className={cn(
        "w-10 dpb:w-16 h-10 dpb:h-16 hover:opacity-60 transition-opacity duration-300 flex-shrink-0",
        isReversed && "relative rotate-180",
        className
      )}
      aria-label="toggler"
      onClick={onClick}
    >
      <LazyImage
        className="w-16 h-16"
        imgWidth="64"
        imgHeight="64"
        url="/svg/slider-next.svg"
        alt="next"
      />
    </button>
  );
}

export default SliderArrow;
