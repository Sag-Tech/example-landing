import Point from "~/components/Point";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import { ANCHOR_SERVICES } from "~/constants/paths";
import LazyImage from "../LazyImage";
import { IconsCard } from "~/data/services";

type Props = {
  items: Array<IconsCard>;
};

function IconsSection({ items }: Props) {
  return (
    <SectionContainer
      isCenter
      id={ANCHOR_SERVICES.slice(1)}
      title="What You Get"
      titleAnimated
      className="overflow-hidden"
    >
      <div className="dpb:px-[90px] flex items-start justify-center flex-wrap gap-x-5 dpb:gap-x-20 gap-y-5 dp:gap-y-10 dpb:gap-y-20">
        {items.map(({ title, text, icon }, idx) => (
          <div
            className="max-w-[340px] w-full"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
            key={icon}
          >
            <Point text={text} title={title}>
              <LazyImage
                className="h-16 w-16"
                imgWidth={64}
                imgHeight={64}
                url={icon}
                alt={title || "icon"}
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

export default IconsSection;
