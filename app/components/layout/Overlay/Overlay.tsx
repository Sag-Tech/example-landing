import type { PropsWithChildren } from "react";
import React from "react";
import cn from "classnames";

type Props = PropsWithChildren<{
  isOpen: boolean;
  onClick: (e: React.MouseEvent) => void;
}>;

function Overlay({ isOpen, onClick, children }: Props) {
  return (
    <div
      onClick={onClick}
      aria-hidden="true"
      className={cn(
        "fixed top-0 left-0 right-0 h-full bg-blue/60 invisible opacity-0 transition-all duration-300 z-[105]",
        {
          "!visible opacity-100": isOpen,
        }
      )}
    >
      {children}
    </div>
  );
}

export default Overlay;
