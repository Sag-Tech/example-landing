import { useMemo } from "react";
import cn from "classnames";
import { Link, useLocation } from "@remix-run/react";
import type { BlogCardContentProps } from "./BlogCardContent";
import BlogCardContent from "./BlogCardContent";
import LazyImage from "../LazyImage";

export type BlogCardProps = BlogCardContentProps & {
  isReversed?: boolean;
  isVertical?: boolean;
  isFullHeight?: boolean;
  imgSmall?: boolean;
  className?: string;
  urlV?: string;
  urlV2x?: string;
};

function BlogCard({
  url,
  url2x,
  urlV,
  urlV2x,
  isReversed = false,
  isVertical = false,
  imgSmall = false,
  className,
  ...cardProps
}: BlogCardProps) {
  const location = useLocation();

  const classes = useMemo(
    () =>
      cn(
        "w-full",
        isReversed && "reversed",
        isVertical ? "flex-col" : "flex-col dp:flex-row dp:items-stretch",
        "flex bg-white rounded-lg overflow-hidden shadow-[0_30px_30px_-20px_rgba(0,0,0,0.05)]",
        className
      ),
    [isReversed, isVertical, className]
  );

  const imgDesktopSize = imgSmall
    ? "dp:w-[160px] dpb:w-[220px]"
    : "dp:w-[220px]";

  return (
    <div className={classes}>
      <Link
        aria-label={cardProps.title}
        to={cardProps.actionLink || ""}
        state={{ from: location }}
        className={cn(
          "block flex-shrink-0",
          isReversed ? "order-1 dp:order-2" : "order-2 dp:order-1",
          isVertical
            ? "h-[180px] dp:h-[375px] w-full"
            : `h-[180px] dp:h-auto w-full ${imgDesktopSize}`
        )}
      >
        <LazyImage
          objectFit="cover"
          url={isVertical ? url : urlV}
          url2x={isVertical ? url2x : urlV2x}
          alt={cardProps.title}
          imgHeight="375"
          imgWidth={isVertical ? "700" : "220"}
          className="h-full w-full"
          bgColor="blue/60"
        />
      </Link>
      <BlogCardContent
        className={isReversed ? "order-1" : "order-2"}
        {...cardProps}
      />
    </div>
  );
}

export default BlogCard;
