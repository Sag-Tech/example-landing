import type { PropsWithChildren } from "react";
import { CardDate, CardSubtitle } from "~/components/Card";
import CardTags from "~/components/Card/CardTags";
import Container from "~/components/Container";
import LinkBack from "~/components/LinkBack";
import Section from "./Section";

type Props = PropsWithChildren<{
  backPath: string;
  date?: string;
  subtitle?: string;
  sectionOffsetSmall?: boolean;
  tags?: Array<string>;
}>;

export default function SectionBackContainer({
  children,
  backPath,
  date,
  subtitle,
  sectionOffsetSmall,
  tags,
}: Props) {
  return (
    <Section offsetSmall={sectionOffsetSmall} bgColor="white">
      <Container>
        <div className="flex-wrap dp:flex-nowrap flex">
          <div
            data-aos="fade-right"
            className="order-1 mb-5 dp:mb-0 w-2/3 dp:w-auto self-start flex-2 dp:flex-1 sticky top-[20px] dp:top-[80px]"
          >
            <div className="inline-block mb-2.5 dp:mb-5 flex-shrink-1 dp:flex-shrink-0">
              <LinkBack path={backPath} />
            </div>
            {subtitle && <CardSubtitle title={subtitle} />}
            {tags && <CardTags list={tags} />}
          </div>
          <Container
            smallWidth
            className="max-dp:!px-0 order-3 dp:w-full dp:order-2"
          >
            {children}
          </Container>
          <div
            data-aos="fade-left"
            className="w-1/3 order-2 dp:order-3 dp:w-auto flex flex-1 justify-end self-start sticky top-[40px] dp:top-[80px]"
          >
            {date && <CardDate date={date} />}
          </div>
        </div>
      </Container>
    </Section>
  );
}
