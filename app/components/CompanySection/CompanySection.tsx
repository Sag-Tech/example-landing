import { COMPANY_SECTION } from "~/data";
import Point from "~/components/Point";
import LineChart from "~/components/charts/LineChart";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import LazyImage from "../LazyImage";

function CompanySection() {
  const { title, description, items } = COMPANY_SECTION;

  return (
    <SectionContainer
      isCenter
      title={title}
      description={description}
      className="dpb:!pt-[58px] overflow-hidden"
      titleAnimated
    >
      <div className="flex flex-col sm:flex-row gap-y-5 w-full justify-between items-center max-w-[1180px] mx-auto">
        {items.map(({ text, content }, idx) => (
          <div
            key={content}
            data-aos="fade-up"
            data-aos-delay={150 * idx}
            className="max-w-[340px] w-full"
          >
            <Point text={text}>
              <LazyImage
                className="h-16 w-16"
                imgWidth={64}
                imgHeight={64}
                url={content}
                alt="company icon"
                objectPosition="bottom"
                objectFit="contain"
              />
            </Point>
          </div>
        ))}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex justify-center dpb:mt-7"
      >
        <LineChart />
      </div>
    </SectionContainer>
  );
}

export default CompanySection;
