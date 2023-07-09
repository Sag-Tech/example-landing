import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import cn from "classnames";

type CardContentProps = PropsWithChildren<{
  bgColor?: "white";
  noOffset?: boolean;
  className?: string;
}>;

function CardContent({
  children,
  bgColor,
  noOffset,
  className,
}: CardContentProps) {
  const classes = useMemo(
    () =>
      cn(
        "flex flex-col items-start gap-5 dp:gap-10",
        bgColor && `bg-${bgColor}`,
        !noOffset && "p-5 dp:p-10",
        className
      ),
    [bgColor, noOffset, className]
  );

  return <div className={classes}>{children}</div>;
}

export default CardContent;
