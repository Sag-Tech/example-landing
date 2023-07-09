import SectionContainer from "~/components/layout/Section/SectionContainer";
import { SectionBgColor } from "~/components/layout/Section/types";
import SectionSubtitle from "~/components/layout/Section/SectionSubtitle";
import Offset from "../Offset";
import StepCard, { StepsCard } from "~/components/cards/StepCard";
import Divider from "~/components/Divider";

type Props = {
  label?: string;
  bgColor?: SectionBgColor;
  isCenter?: boolean;
  items: Array<StepsCard>;
};

function StepsCardsSection({ label, bgColor, items, isCenter }: Props) {
  return (
    <SectionContainer
      bgColor={bgColor}
      isCenter={isCenter}
      className="overflow-hidden"
    >
      <Offset className="text-center" offset="off">
        <div data-aos="fade-up">
          <SectionSubtitle
            className="italic max-dp:leading-[20px]"
            isGradient
            title={label}
          />
        </div>
        <div data-aos="fade-up" data-aos-delay={200}>
          <Divider size="small" className="my-10 mx-auto" />
        </div>
      </Offset>
      <div className="flex flex-col lp:flex-row justify-center flex-wrap gap-5">
        {Array.isArray(items) &&
          items.map((item, idx) => (
            <div
              data-aos="fade-up"
              data-aos-delay={150}
              className="flex-1 lp:min-w-[40%] lp:max-w-1/2"
              key={item.title}
            >
              <StepCard className="h-full" idx={idx + 1} {...item} />
            </div>
          ))}
      </div>
    </SectionContainer>
  );
}

export default StepsCardsSection;
