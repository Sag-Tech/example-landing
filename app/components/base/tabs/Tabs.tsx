import cn from "classnames";
import Tab from "./Tab";
import { TabsItem } from "./types";

export type Props = {
  tabs: Array<TabsItem>;
  activeTab: string;
  onToggleTab: (id: string) => void;
  className?: string;
  isScrollable?: boolean;
};

function Tabs({
  tabs,
  activeTab,
  isScrollable,
  className,
  onToggleTab,
}: Props) {
  return (
    <div
      className={cn(
        "scroll-hidden flex justify-start max-dp:px-5 max-dp:-mx-5 dp:justify-center dp:flex-wrap gap-x-2.5 dp:gap-x-3 dpb:gap-x-5 dp:gap-y-3",
        isScrollable && "overflow-x-scroll dp:overflow-x-visible",
        className
      )}
    >
      {tabs.map(tab => (
        <div key={tab.id}>
          <Tab
            isActive={tab.id === activeTab}
            title={tab.title}
            onClick={() => onToggleTab(tab.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default Tabs;
