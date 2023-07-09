import { useMemo, useState } from "react";
import StacksGrid from "~/components/grids/StacksGrid";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import Button from "~/components/Button";
import useMediaQuery from "~/hooks/useMediaQuery";
import { ANCHOR_STACK } from "~/constants/paths";
import { SectionBgColor } from "~/components/layout/Section/types";
import { Stack } from "~/services/api/types";

type Props = {
  title?: string;
  bgColor?: SectionBgColor;
  isCenter?: boolean;
  items: Array<Stack>;
};

const SLICE_ITEMS_COUNT = 12;

function StackSection({
  title = "Tech stack",
  bgColor = "grey",
  items,
  isCenter,
}: Props) {
  const isAboveLaptop = useMediaQuery("(min-width: 768px)");
  const [isShowMore, setIsShowMore] = useState(false);

  const slicedTechnologies = useMemo(() => {
    if (!isAboveLaptop && !isShowMore) {
      return items.slice(0, SLICE_ITEMS_COUNT);
    }

    return items;
  }, [items, isAboveLaptop, isShowMore]);

  return (
    <SectionContainer
      id={ANCHOR_STACK.slice(1)}
      title={title}
      bgColor={bgColor}
      isCenter={isCenter}
      titleAnimated
    >
      <div className="px-0 dp:px-10" data-aos="fade-up" data-aos-delay={100}>
        <StacksGrid center={isCenter} items={slicedTechnologies} />
      </div>

      {items.length - SLICE_ITEMS_COUNT > 0 && !isAboveLaptop && (
        <div data-aos="fade-up" data-aos-delay={150}>
          <Button
            onClick={() => setIsShowMore(!isShowMore)}
            className="!flex px-[27px] mt-5 mx-auto"
          >
            <span className="text-sm leading-4 uppercase font-medium">
              {isShowMore
                ? "hide"
                : `Show ${items.length - slicedTechnologies.length} more`}
            </span>
          </Button>
        </div>
      )}
    </SectionContainer>
  );
}

export default StackSection;
