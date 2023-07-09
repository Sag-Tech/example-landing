import cn from "classnames";
import type { TabProps } from "~/components/tabs/ButtonTab/ButtonTab";
import { HOW_WORK_SECTION } from "~/data";
import TabContent from "~/components/tabs/TabContent";

type BookmarkTabProps = TabProps & {
  color: string;
  borderColor?: string;
  idx: number;
};

function BookmarkTab({
  label,
  color,
  borderColor,
  activeCategory,
  onClick,
  idx,
}: BookmarkTabProps) {
  return (
    <>
      <button
        type="button"
        onClick={() => onClick(label)}
        className={`relative flex justify-center items-center border border-white rounded-lg ${color} 
      w-full h-[40px] lp:h-20 cursor-pointer ml-0 lp:-ml-[9px] lp:[&:nth-of-type(3)]:pl-5 first:ml-0 bookmark`}
      >
        <span
          className={cn(
            "absolute !z-10 w-6 h-6 lp:w-5 lp:h-5 -bottom-[4.5px] lp:-bottom-[12px] lp:border-r-[3px] " +
              "lp:border-b-[3px] border-white left-1/2 -translate-x-1/2 rounded-md lp:rounded-none lp:rounded-br-[5px] " +
              `rotate-45 ${color} visible opacity-100 lp:opacity-0 lp:invisible`,
            { "!visible !opacity-100": label === activeCategory }
          )}
        />
        <span
          className={`hidden lp:block absolute !z-30 w-[54px] h-[45px] ${color} rotate-[55deg] top-[8.9px] 
          -right-[23px] rounded-tl-[9.3px] rounded-tr-[10px] border-t border-t-white`}
        />
        <span
          className={`hidden lp:block absolute !z-20 w-[54px] h-[45px] ${color} -rotate-[55deg] bottom-[8.9px] 
          -right-[23px] 
        rounded-bl-[9.3px] rounded-br-[10px] border-b border-b-white`}
        />
        <i
          className="not-italic text-sm lp:text-base pl-0 lp:pl-5 font-medium drop-shadow-[0_1px_0_rgba(27,28,46,0.2)]
        text-white z-40"
        >
          {label}
        </i>
      </button>

      <div
        className={`block lp:hidden flex border ${borderColor} p-5 lp:p-10 rounded-lg last-of-type:mb-0
      mb-2.5 lp:mb-0`}
      >
        <TabContent
          key={idx}
          text={HOW_WORK_SECTION[idx].text}
          description={HOW_WORK_SECTION[idx].description}
        />
      </div>
    </>
  );
}

export default BookmarkTab;
