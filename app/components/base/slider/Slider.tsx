import cn from "classnames";
import { ReactNode, useCallback, useRef } from "react";
import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "~/components/Container";

import { sliderParams } from "./config";
import SliderArrow from "./SliderArrow";

type Props<T> = {
  items: Array<T> | [];
  renderCard: (item: T, idx: number) => ReactNode;
  className?: string;
};

function Slider<T>({
  items,
  renderCard,
  className,
}: Props<T & { id: string }>) {
  const sliderRef = useRef<SwiperRef>(null);

  const handleNext = useCallback(() => {
    sliderRef?.current?.swiper.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    sliderRef?.current?.swiper.slidePrev();
  }, []);

  return (
    <div className={cn("flex items-center max-dp:pr-[55px]", className)}>
      <div data-aos="fade-right" className="hidden dp:block ml-auto">
        <SliderArrow isReversed onClick={handlePrev} />
      </div>
      <Container className="max-dp:!px-0 max-[1240px]:!max-w-[900px] max-[1620px]:!max-w-[1100px]">
        <Swiper
          ref={sliderRef}
          {...sliderParams}
          className="!pb-5 dp:!pb-10 !overflow-visible dp:!overflow-hidden"
        >
          {items.map((item, idx) => (
            <SwiperSlide style={{ height: "auto" }} key={item.id}>
              {renderCard(item, idx)}
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <div data-aos="fade-left" className="hidden dp:block mr-auto">
        <SliderArrow onClick={handleNext} />
      </div>
    </div>
  );
}

export default Slider;
