import type { PropsWithChildren } from "react";
import React from "react";
import cn from "classnames";
import ButtonTab from "~/components/tabs/ButtonTab";
import type { TabTypes } from "~/components/tabs/TabBar/types";
import BookmarkTab from "~/components/tabs/BookmarkTab";

type Props = PropsWithChildren<{
  tabs: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  tabType: TabTypes;
  styles?: string;
  colors?: string[];
  borderColors?: string[];
}>;

function TabBar({
  tabs,
  activeCategory,
  setActiveCategory,
  styles,
  tabType = "ButtonTab",
  colors,
  borderColors,
}: Props) {
  return (
    <div
      className={cn(
        "flex",
        {
          "relative flex-col lp:flex-row": tabType === "BookmarkTab",
          "scroll-hidden max-dp:px-5 max-dp:-mx-5 overflow-x-auto dp:overflow-x-visible white whitespace-nowrap":
            tabType === "ButtonTab",
        },
        styles
      )}
    >
      {tabs.map((tab, idx) => {
        return tabType === "ButtonTab" ? (
          <ButtonTab
            key={tab}
            activeCategory={activeCategory}
            label={tab}
            onClick={setActiveCategory}
          />
        ) : (
          <BookmarkTab
            key={tab}
            idx={idx}
            activeCategory={activeCategory}
            label={tab}
            borderColor={borderColors?.[idx]}
            onClick={setActiveCategory}
            color={colors?.[idx] || "bg-green"}
          />
        );
      })}
    </div>
  );
}

export default TabBar;
