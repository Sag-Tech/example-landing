import React from "react";
import cn from "classnames";

export type TabProps = {
  label: string;
  activeCategory: string;
  onClick: (category: string) => void;
};

function ButtonTab({ label, activeCategory, onClick }: TabProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(label)}
      className={cn(
        { "!text-blue": label === activeCategory },
        "text-sm lp:text-base bg-white border-blue/10 border rounded-[20px] py-2 px-5 text-green500 transition-all"
      )}
    >
      {label}
    </button>
  );
}

export default ButtonTab;
