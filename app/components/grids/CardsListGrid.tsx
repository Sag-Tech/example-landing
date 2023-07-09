import type { ReactNode } from "react";
import Typo from "../Typo";

type Props<T> = {
  items: Array<T>;
  renderCard: (item: T) => ReactNode;
};

function CardsListGrid<T>({
  renderCard,
  items = [],
}: Props<T & { id: string }>) {
  return (
    <div className="flex flex-wrap -mx-[10px] -my-[10px] sm:-my-[20px]">
      {items.length > 0 ? (
        items.map(item => (
          <div
            data-aos="fade-up"
            data-aos-delay={100}
            className="w-full sm:w-1/2 dp:w-1/3 dpb:w-1/4 px-[10px] py-[10px] sm:py-[20px]"
            key={item.id}
          >
            {renderCard(item)}
          </div>
        ))
      ) : (
        <div className="w-full flex justify-center px-[10px] py-[10px] sm:py-[20px]">
          <Typo tag="p" tagStyles="h4">
            Empty list...
          </Typo>
        </div>
      )}
    </div>
  );
}

export default CardsListGrid;
