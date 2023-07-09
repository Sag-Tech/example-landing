import { useMemo, useState } from "react";
import Point from "~/components/Point";
import { STACK_SECTION } from "~/data";
import StacksGrid from "~/components/grids/StacksGrid";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import Offset from "~/components/Offset";
import Button from "~/components/Button";
import useMediaQuery, { medias } from "~/hooks/useMediaQuery";
import { ANCHOR_STACK } from "~/constants/paths";
import { Technology } from "~/services/api/technologies/types";
import { TechnologyCategory } from "~/services/api/technologyCategories/types";
import Tabs from "~/components/base/tabs";
import { mapTechnologyCategories } from "~/services/api/technologyCategories/helpers";
import { mapTechnologyToStack } from "~/services/api/technologies/helpers";
import LazyImage from "../LazyImage";

type Props = {
  technologies: Array<Technology>;
  technologiesCategories: Array<TechnologyCategory>;
};

const ALL_TAB_ID = "all";
const SLICE_ITEMS_COUNT = 12;
const ALL_TAB_ITEM = { id: ALL_TAB_ID, title: "All stack" };

function StackSection({ technologies, technologiesCategories }: Props) {
  const [activeCategory, setActiveCategory] = useState(ALL_TAB_ID);
  const [isShowMore, setIsShowMore] = useState(false);
  const isDesktop = useMediaQuery(medias.DESKTOP);

  const mappedTechnologies = useMemo(() => {
    if (technologies) {
      return technologies.map(technology => mapTechnologyToStack(technology));
    }

    return [];
  }, [technologies]);

  const filteredTechnologies = useMemo(() => {
    if (activeCategory === ALL_TAB_ID) {
      return mappedTechnologies;
    }

    return mappedTechnologies.filter(stack =>
      stack.category.includes(activeCategory)
    );
  }, [activeCategory, mappedTechnologies]);

  const slicedTechnologies = useMemo(() => {
    if (!isDesktop && !isShowMore) {
      return filteredTechnologies.slice(0, SLICE_ITEMS_COUNT);
    }

    return filteredTechnologies;
  }, [filteredTechnologies, isDesktop, isShowMore]);

  const tabs = useMemo(() => {
    return [
      ALL_TAB_ITEM,
      ...technologiesCategories.map(tc => mapTechnologyCategories(tc)),
    ];
  }, [technologiesCategories]);

  return (
    <SectionContainer
      id={ANCHOR_STACK.slice(1)}
      title="Tech stack"
      bgColor="grey"
      isCenter
      titleAnimated
      className="overflow-hidden"
    >
      <div className="flex flex-wrap gap-y-5 w-full justify-center dp:justify-between gap-2.5 mb-10 dp:mb-15 max-w-[1180px] mx-auto">
        {STACK_SECTION.map(({ imageURL, text }, idx) => (
          <div
            key={imageURL}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            data-aos-once={!isDesktop}
            className="max-w-[340px] w-full"
          >
            <Point text={text}>
              <LazyImage
                className="w-[54px] h-[54px]"
                imgWidth={54}
                imgHeight={54}
                url={imageURL}
                alt="stack icon"
                objectFit="contain"
                objectPosition="bottom"
              />
            </Point>
          </div>
        ))}
      </div>

      <Offset offset="small" className="flex justify-center dpb:pt-4">
        <div data-aos="fade-up" data-aos-once={!isDesktop} className="w-full">
          <Tabs
            tabs={tabs}
            activeTab={activeCategory}
            onToggleTab={setActiveCategory}
            isScrollable
          />
        </div>
      </Offset>

      <div
        data-aos="fade-up"
        data-aos-once={!isDesktop}
        className="px-0 dp:px-10"
      >
        <StacksGrid center items={slicedTechnologies} />
      </div>

      {filteredTechnologies.length - SLICE_ITEMS_COUNT > 0 && !isDesktop && (
        <div
          data-aos="fade-up"
          data-aos-once={!isDesktop}
          className="mt-5 mx-auto flex justify-center"
        >
          <Button
            onClick={() => setIsShowMore(!isShowMore)}
            className="!flex px-[27px]"
          >
            <span className="text-sm leading-4 uppercase font-medium">
              {isShowMore
                ? "hide"
                : `Show ${
                    filteredTechnologies.length - slicedTechnologies.length
                  } more`}
            </span>
          </Button>
        </div>
      )}
    </SectionContainer>
  );
}

export default StackSection;
