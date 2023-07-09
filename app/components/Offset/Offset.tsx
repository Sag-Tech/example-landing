/* eslint-disable no-shadow */
/* eslint-disable security/detect-object-injection */
import cn from "classnames";
import type { PropsWithChildren } from "react";

enum Offsets {
  "off" = "mb-0",
  "xs" = "mb-2.5 dp:mb-5",
  "small" = "mb-5 dp:mb-10",
  "medium" = "mb-10 dp:mb-15",
  "normal" = "mb-10 dp:mb-20",
}

type OffsetSizes = keyof typeof Offsets;

type Props = PropsWithChildren<{
  offset?: OffsetSizes;
  className?: string;
}>;

export default function Offset({
  className,
  children,
  offset = "normal",
}: Props) {
  return (
    <div className={cn(offset && Offsets[offset], className)}>{children}</div>
  );
}
