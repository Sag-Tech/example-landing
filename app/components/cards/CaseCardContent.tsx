import { useLocation } from "@remix-run/react";
import type { PropsWithChildren } from "react";
import { CardTitle, CardText, CardTags, CardSubtitle } from "~/components/Card";
import CardContent from "~/components/Card/CardContent";
import LinkRoute from "../LinkRoute";
import type { CommonCardProps } from "./types";

type CaseCardContentProps = PropsWithChildren<
  CommonCardProps & { tags?: Array<string>; subtitle?: string }
>;

function CaseCardContent({
  title,
  tags,
  text,
  className,
  bgColor,
  subtitle,
  noOffset = false,
  children,
  actionLink,
}: CaseCardContentProps) {
  const location = useLocation();
  const titleComponent = <CardTitle title={title} />;

  return (
    <CardContent noOffset={noOffset} className={className} bgColor={bgColor}>
      <div className="flex flex-col gap-2.5">
        {actionLink ? (
          <LinkRoute
            ariaLabel={title}
            to={actionLink || ""}
            state={{ from: location }}
            isUnderline={false}
          >
            {titleComponent}
          </LinkRoute>
        ) : (
          titleComponent
        )}

        {subtitle && <CardSubtitle title={subtitle} />}
        {tags && <CardTags list={tags} />}
      </div>
      <CardText text={text} />
      {children}
    </CardContent>
  );
}

export default CaseCardContent;
