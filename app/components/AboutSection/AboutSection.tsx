import { ABOUT_SECTION } from "~/data";
import Point from "~/components/Point";
import Typo from "~/components/Typo";
import DoughnutChart from "~/components/charts/DoughnutChart";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import { ANCHOR_ABOUT } from "~/constants/paths";

function AboutSection() {
  const { title, description, items } = ABOUT_SECTION;
  return (
    <SectionContainer
      isRelative
      className="!pb-0 overflow-hidden"
      title={title}
      description={description}
      id={ANCHOR_ABOUT.slice(1)}
      isCenter
      titleAnimated
    >
      <div
        className="flex flex-col sm:flex-row w-full gap-y-5 gap-2.5 sm:gap-5 justify-between mb-[20px] dpb:mb-10
      max-w-[1180px] mx-auto items-center sm:items-start"
      >
        {items.map(({ text, content }, idx) => (
          <div
            key={content}
            data-aos="fade-up"
            data-aos-delay={idx * 150}
            className="max-w-[340px] w-full"
          >
            <Point text={text} styles="!gap-1 sm:!gap-5">
              <Typo isShadow isGradient tag="h3">
                {content}
              </Typo>
            </Point>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex justify-center"
      >
        <DoughnutChart />
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
