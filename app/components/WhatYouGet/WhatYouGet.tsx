import { WHAT_YOU_GET_SECTION } from "~/data";
import Point from "~/components/Point";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import LazyImage from "~/components/LazyImage";

function ServicesSection() {
  return (
    <SectionContainer
      isCenter
      title="What you get"
      titleAnimated
      className="overflow-hidden dp:[&>*:nth-child(1)]:max-w-[1100px] dpb:[&>*:nth-child(1)]:max-w-[1460px]"
    >
      <div
        className="flex items-start justify-center flex-wrap gap-x-5 dpb:gap-x-5 gap-y-5 lp:gap-y-10 dpb:gap-y-16
       pt-3 lp:pt-0 [&>div:nth-of-type(2)]:-mt-2 lp:[&>div:nth-of-type(2)]:-mt-2 [&>div:nth-of-type(2)]:self-end"
      >
        {WHAT_YOU_GET_SECTION.map(({ text, url }, idx) => (
          <div
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="max-w-[250px] dpb:max-w-[340px] w-full"
            key={url}
          >
            <Point text={text}>
              <LazyImage
                className="h-16 w-16"
                imgWidth={64}
                imgHeight={64}
                url={url}
                alt="services"
                objectFit="contain"
                objectPosition="bottom"
              />
            </Point>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

export default ServicesSection;
