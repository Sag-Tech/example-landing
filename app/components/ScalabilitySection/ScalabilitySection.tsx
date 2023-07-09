import React from "react";
import { SCALABILITY_SECTION } from "~/data";
import Point from "~/components/Point";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import { ANCHOR_SCALABILITY } from "~/constants/paths";
import LazyImage from "../LazyImage";

function ScalabilitySection() {
  return (
    <SectionContainer
      isCenter
      id={ANCHOR_SCALABILITY.slice(1)}
      title="Scalability"
      className="[&>*:nth-child(1)]:max-w-[1460px] overflow-hidden"
      titleAnimated
    >
      <div className="w-full flex items-start justify-center flex-wrap gap-x-5 gap-y-5">
        {SCALABILITY_SECTION.map(({ text, url }, idx) => (
          <div
            key={url}
            data-aos="fade-up"
            data-aos-delay={100 * idx}
            className="max-w-[335px] lp:max-w-[250px] dpb:max-w-[340px] w-full"
          >
            <Point text={text}>
              <LazyImage
                className="flex items-end justify-center h-16 w-16"
                imgWidth={64}
                imgHeight={64}
                url={url}
                alt="scalability icon"
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

export default ScalabilitySection;
