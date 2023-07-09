import cn from "classnames";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
  type?: "ordered" | "unordered";
}>;

export default function PageList({ type, className, children }: Props) {
  const Component = type === "ordered" ? "ul" : "ol";
  return (
    <Component
      className={cn(
        "text-list pl-7 mb-[10px] dp:mb-5 dpb:mb-[10px]",
        type === "ordered" ? "--num" : "--dot",
        className
      )}
    >
      {children}
    </Component>
  );
}
