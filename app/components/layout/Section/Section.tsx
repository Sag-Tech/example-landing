import type { PropsWithChildren } from "react";
import cn from "classnames";
import type { SectionBgColor } from "./types";
import ScrollAnchor from "~/components/ScrollAnchor";

type Props = PropsWithChildren<{
  className?: string;
  bgColor?: SectionBgColor;
  noOffset?: boolean;
  offsetSmall?: boolean;
  isRelative?: boolean;
  isCenter?: boolean;
  id?: string;
  scrollAnchor?: boolean;
}>;

function Section({
  noOffset,
  offsetSmall,
  children,
  className,
  bgColor,
  isRelative,
  isCenter,
  id,
  scrollAnchor,
}: Props) {
  return (
    <section
      className={cn(
        "dp:py-20",
        offsetSmall ? "py-5" : "py-10",
        noOffset && "!py-0",
        isCenter && "text-center",
        bgColor === "grey" && "bg-grey",
        bgColor === "white" && "bg-white",
        (isRelative || scrollAnchor) && "relative",
        className
      )}
    >
      {scrollAnchor && id ? <ScrollAnchor id={id} /> : null}
      {children}
    </section>
  );
}

export default Section;
