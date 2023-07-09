/* eslint-disable security/detect-object-injection */
import React, { useCallback, useEffect, useRef, useState } from "react";
import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "@remix-run/react";
import { PHOTO_URLS, SERVICES_DESCRIPTION } from "~/data";
import { bigSliderParams, smallSliderParams } from "./types";
import { CaseCardContent } from "~/components/cards";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import SliderPagination from "~/components/SliderPagination";
import SliderNavigation from "~/components/SliderNavigation/SliderNavigation";
import LazyImage from "../LazyImage";
import useMediaQuery, { medias } from "~/hooks/useMediaQuery";
import { ANCHOR_SERVICES, PAGE_SERVICES } from "~/constants/paths";
import LinkRoute from "../LinkRoute";

function ServicesSection() {
  const isDesktop = useMediaQuery(medias.DESKTOP);
  const { bigDesktop, bigMobile, small } = PHOTO_URLS;
  const sliderRef = useRef<SwiperRef>(null);
  const bigSliderRef = useRef<SwiperRef>(null);
  const [bigSliderIndex, setBigSliderIndex] = useState(0);

  const handlePagination = useCallback((index: number) => {
    bigSliderRef?.current?.swiper.slideTo(index);
  }, []);

  const handleNext = () => {
    bigSliderRef?.current?.swiper.slideNext();
    sliderRef?.current?.swiper.slideNext();
  };

  useEffect(() => {
    bigSliderRef?.current?.swiper.changeLanguageDirection(
      isDesktop ? "rtl" : "ltr"
    );
  }, [isDesktop]);

  return (
    <SectionContainer
      title="Services"
      maxWidthFull
      id={ANCHOR_SERVICES.slice(1)}
      isCenter
      bgColor="grey"
      className="px-0"
      titleAnimated
    >
      <div className="flex flex-col items-center dp:items-stretch dp:flex-row dpb:pt-5">
        <div className="hidden dp:block flex-1 shrink-0 relative">
          <div className="absolute right-0 bottom-0 overflow-hidden pr-5">
            <Swiper
              {...smallSliderParams}
              className="lp:!flex !mx-0 dp:w-[540px] dpb:w-[710px]"
              ref={sliderRef}
              dir="rtl"
              onInit={swiper => swiper.slideTo(1)}
            >
              {small.map(({ id, url, index }, idx) => (
                <SwiperSlide key={id}>
                  <div data-aos="fade-up" data-aos-delay={idx * 100}>
                    <Link
                      aria-label="link"
                      to={`${PAGE_SERVICES}/${SERVICES_DESCRIPTION[index].link}`}
                      className="block flex-shrink-0"
                    >
                      <LazyImage
                        className="w-[220px] h-[260px]"
                        imgWidth={220}
                        imgHeight={260}
                        url={url}
                        alt="team"
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="max-w-[335px] dp:max-w-none w-full dp:w-[300px] dpb:w-[340px] overflow-hidden">
          <Swiper
            ref={bigSliderRef}
            {...bigSliderParams}
            dir="rtl"
            onSlideChange={swiper => setBigSliderIndex(swiper.realIndex)}
            className="h-[400px] dp:h-[530px] dpb:h-[600px] !mx-0"
          >
            {bigDesktop.map(({ id, url }, idx) => (
              <SwiperSlide key={id}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="h-full"
                >
                  <Link
                    aria-label="link"
                    to={`${PAGE_SERVICES}/${SERVICES_DESCRIPTION[bigSliderIndex].link}`}
                    className="block flex-shrink-0"
                  >
                    <LazyImage
                      imgWidth={340}
                      imgHeight={600}
                      className="h-full"
                      url={url}
                      urlMob={bigMobile[idx].url}
                      objectFit="cover"
                      alt="team"
                    />
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex-1 shrink-0">
          <div className="flex flex-col items-center dp:items-start dp:pt-[80px] pt-5 dpb:pt-[72px] dp:pl-10 dpb:pl-20 h-full">
            <div className="max-w-[340px] dp:mb-5" data-aos="fade-up">
              <CaseCardContent
                noOffset
                title={SERVICES_DESCRIPTION[bigSliderIndex].title}
                text={SERVICES_DESCRIPTION[bigSliderIndex].text}
                className="items-center dp:items-start text-center dp:text-start [&_p]:text-base"
              >
                <LinkRoute
                  asButton
                  size="small"
                  isUppercase
                  to={`${PAGE_SERVICES}/${SERVICES_DESCRIPTION[bigSliderIndex].link}`}
                >
                  More info
                </LinkRoute>
              </CaseCardContent>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="50"
              className="mt-auto hidden dp:block"
            >
              <SliderNavigation
                onClick={handleNext}
                className="h-10 w-10 dpb:h-16 dpb:w-16"
              />
            </div>

            <div data-aos="fade-up" className="dp:hidden">
              <SliderPagination
                slidesCount={4}
                activeIndex={bigSliderIndex}
                onClick={handlePagination}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default ServicesSection;
