import { useLocation } from "@remix-run/react";
import { useMemo } from "react";
import cn from "classnames";
import Typo from "~/components/Typo/Typo";
import {
  CardDate,
  CardSubtitle,
  CardTitle,
  CardContent,
} from "~/components/Card";

import type { CommonCardProps } from "./types";
import LinkRoute from "../LinkRoute";

export type BlogCardContentProps = CommonCardProps & {
  date?: string;
  actionLink?: string;
  subtitle?: string;
};

function BlogCardContent({
  title,
  subtitle,
  text,
  date,
  className,
  actionLink,
}: BlogCardContentProps) {
  const location = useLocation();

  const slicedText = useMemo(() => {
    const subString = `${text || ""}`.slice(0, 149);

    if (subString.length < 149) {
      return subString;
    }
    return `${subString.slice(0, subString.lastIndexOf(" "))}...`;
  }, [text]);

  return (
    <CardContent className={cn("flex-1", className)} bgColor="white">
      <div className="w-full flex flex-col gap-2.5">
        <div className="flex flex-col dpb:flex-row dpb:justify-between gap-[10px] dpb:gap-10">
          <div className="order-2 dpb:order-1">
            <LinkRoute
              ariaLabel={title}
              to={actionLink || ""}
              state={{ from: location }}
              isUnderline={false}
            >
              <CardTitle title={title} />
            </LinkRoute>
          </div>
          {date && (
            <div className="order-1 dpb:order-2">
              <CardDate date={date} />
            </div>
          )}
        </div>
        <CardSubtitle title={subtitle} />
      </div>
      <Typo tag="p">{slicedText}</Typo>
      {actionLink && (
        <LinkRoute
          ariaLabel={title}
          to={actionLink}
          state={{ from: location }}
          asButton
          size="small"
          className="overflow-hidden"
        >
          <span className="opacity-0 pointer-events-none absolute -top-96">
            {title}
          </span>
          read more
        </LinkRoute>
      )}
    </CardContent>
  );
}

export default BlogCardContent;
