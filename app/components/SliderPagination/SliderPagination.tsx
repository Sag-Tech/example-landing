import React from "react";
import cn from "classnames";

type Props = {
  activeIndex: number;
  onClick: (index: number) => void;
  slidesCount: number;
};

function SliderPagination({ slidesCount, activeIndex, onClick }: Props) {
  const items = Array.from({ length: slidesCount }, (_, index) => (
    <button
      type="button"
      key={index}
      aria-label="slider-pagination"
      className={cn(
        "w-2.5 h-[3px] rounded-full bg-blue/20 transition-all duration-300  ",
        {
          "!w-5 !bg-green500": activeIndex === index,
        }
      )}
      onClick={() => {
        console.log(index);
        onClick(index);
      }}
    />
  ));
  return <div className="flex justify-center gap-2.5 mt-10">{items}</div>;
}

export default SliderPagination;
