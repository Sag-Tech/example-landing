import { Link, useLocation } from "@remix-run/react";
import type { PropsWithChildren } from "react";
import { Card } from "~/components/Card";
import CaseCardContent from "./CaseCardContent";
import type { CommonCardProps } from "./types";
import LazyImage from "~/components/LazyImage";

type CaseCardProps = PropsWithChildren<
  CommonCardProps & {
    isFullHeight?: boolean;
    imgHeight?: string;
    imgWidth?: string;
  }
>;

function CaseCard({
  url,
  url2x,
  isFullHeight,
  children,
  imgHeight = "210",
  imgWidth = "340",
  ...cardProps
}: CaseCardProps) {
  const location = useLocation();

  return (
    <Card isFullHeight={isFullHeight}>
      <Link
        aria-label={cardProps.title}
        to={cardProps.actionLink || ""}
        state={{ from: location }}
        // className="h-[150px] dp:h-[210px]"
      >
        <LazyImage
          imgHeight={imgHeight}
          imgWidth={imgWidth}
          isShadow
          url={url}
          url2x={url2x}
          alt={cardProps.title}
          // objectFit="cover"
        />
      </Link>

      <CaseCardContent {...cardProps}>{children}</CaseCardContent>
    </Card>
  );
}

export default CaseCard;
