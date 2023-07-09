import type { PropsWithChildren } from "react";
import cn from "classnames";

type Props = PropsWithChildren<{
  className?: string;
  isFullHeight?: boolean;
}>;

function Card({ children, className, isFullHeight }: Props) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-[0_30px_30px_-20px_rgba(0,0,0,0.05)]",
        isFullHeight && "h-full",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
