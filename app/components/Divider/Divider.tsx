/* eslint-disable no-shadow */
/* eslint-disable security/detect-object-injection */
import cn from "classnames";

enum Sizes {
  "xs" = "w-[40px]",
  "small" = "w-[80px]",
  "full" = "w-full",
}

type SizesVariants = keyof typeof Sizes;

type Props = {
  size?: SizesVariants;
  className?: string;
};

export default function Divider({ className, size = "full" }: Props) {
  return (
    <div
      className={cn(
        "block rounded-sm h-[3px] bg-ocean",
        size && Sizes[size],
        className
      )}
    />
  );
}
