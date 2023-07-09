import type { PropsWithChildren } from "react";
import cn from "classnames";
import { containerClasses } from "./types";

type Props = PropsWithChildren<{
  fullHeight?: boolean;
  maxWidthFull?: boolean;
  smallWidth?: boolean;
  noOffset?: boolean;
  className?: string;
}>;

function Container({
  children,
  maxWidthFull,
  smallWidth = false,
  fullHeight = false,
  noOffset = false,
  className,
}: Props) {
  return (
    <div
      className={cn(
        containerClasses.base,
        noOffset ? "px-0" : "px-5",
        fullHeight && containerClasses.fullHeight,
        maxWidthFull && containerClasses.maxWidthFull,
        smallWidth && containerClasses.smallWidth,
        !maxWidthFull && !smallWidth && containerClasses.normalWidth,
        className
      )}
    >
      {children}
    </div>
  );
}

export default Container;
