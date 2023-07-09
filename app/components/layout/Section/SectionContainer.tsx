import cn from "classnames";
import type { PropsWithChildren } from "react";
import Container from "~/components/Container";
import Typo from "~/components/Typo";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import type { SectionBgColor } from "./types";

type Props = PropsWithChildren<{
  title?: string;
  description?: string;
  maxWidthFull?: boolean;
  containerNoOffset?: boolean;
  sectionNoOffset?: boolean;
  sectionOffsetSmall?: boolean;
  containerSmallWidth?: boolean;
  className?: string;
  bgColor?: SectionBgColor;
  isCenter?: boolean;
  isRelative?: boolean;
  titleAnimated?: boolean;
  id?: string;
}>;

function SectionContainer({
  children,
  title,
  description,
  maxWidthFull,
  className,
  containerNoOffset,
  sectionNoOffset,
  sectionOffsetSmall,
  containerSmallWidth,
  bgColor,
  isCenter,
  isRelative,
  id,
  titleAnimated,
}: Props) {
  const titleComponent = <SectionTitle title={title} />;
  const descriptionComponent = (
    <Typo tag="p" className="dpb:!text-2xl dpb:!leading-6 font-light">
      {description}
    </Typo>
  );

  return (
    <Section
      offsetSmall={sectionOffsetSmall}
      noOffset={sectionNoOffset}
      bgColor={bgColor}
      className={className}
      isRelative={isRelative}
      id={id}
      scrollAnchor={Boolean(id)}
    >
      <Container
        noOffset={containerNoOffset}
        smallWidth={containerSmallWidth}
        maxWidthFull={maxWidthFull}
      >
        {Boolean(title || description) && (
          <div
            className={cn(
              "flex flex-col gap-5 dpb:gap-10 items-center mb-[20px] dp:mb-[40px]",
              isCenter && "text-center"
            )}
          >
            {title &&
              (titleAnimated ? (
                <div data-aos="fade-up">{titleComponent}</div>
              ) : (
                titleComponent
              ))}
            {description &&
              (titleAnimated ? (
                <div data-aos="fade-up" data-aos-delay="150">
                  {descriptionComponent}
                </div>
              ) : (
                descriptionComponent
              ))}
          </div>
        )}
        {children}
      </Container>
    </Section>
  );
}

export default SectionContainer;
