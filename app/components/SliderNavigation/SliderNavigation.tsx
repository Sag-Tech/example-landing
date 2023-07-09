import React from "react";
import cn from "classnames";
import LazyImage from "../LazyImage";

type Props = {
  isReversed?: boolean;
  onClick: () => void;
  className?: string;
};

function SliderNavigation({ isReversed = false, onClick, className }: Props) {
  return (
    <div className={className}>
      <button
        type="button"
        aria-label="toggler"
        onClick={onClick}
        className={cn({ "rotate-180": isReversed })}
      >
        <LazyImage
          className="w-10 h-10 dpb:w-16 dpb:h-16"
          imgWidth={64}
          imgHeight={64}
          url="/svg/slider-next.svg"
          alt="next"
        />
      </button>
    </div>
  );
}

export default SliderNavigation;
