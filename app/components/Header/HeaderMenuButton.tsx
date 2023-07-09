import cn from "classnames";
import { useEffect } from "react";
import { hideDocumentScroll } from "~/helpers/document";

type Props = {
  isOpen: boolean;
  isBlur?: boolean;
  onToggle: (isOpen: boolean) => void;
};

function HeaderMenuButton({ isBlur, isOpen, onToggle }: Props) {
  const bgColor = isBlur ? "bg-white" : "bg-blue";
  const commonStyles = `relative w-full h-[1.5px] rounded-lg transition-all duration-300 ${bgColor}`;

  useEffect(() => {
    hideDocumentScroll(isOpen);

    return () => {
      hideDocumentScroll(false);
    };
  }, [isOpen]);

  return (
    <button
      className="dp:hidden flex justify-center items-center w-[24px] h-[24px]"
      onClick={() => onToggle(!isOpen)}
      type="button"
      aria-label="menu-toggler"
    >
      <span className="flex flex-col justify-between w-[16px] h-[12px]">
        <span
          className={cn(commonStyles, "top-[0.2px]", {
            "rotate-45 translate-y-[5.0px]": isOpen,
          })}
        />
        <span className={cn(commonStyles, { "w-0 opacity-0": isOpen })} />
        <span
          className={cn(commonStyles, "bottom-[0.2px]", {
            "-rotate-45 -translate-y-[5.0px]": isOpen,
          })}
        />
      </span>
    </button>
  );
}

export default HeaderMenuButton;
