import classNames from "classnames";
import type { PropsWithChildren } from "react";
import LinkRoute from "~/components/LinkRoute";

type Props = PropsWithChildren<{
  title?: string;
  to?: string;
  asButton?: boolean;
  offsetOff?: boolean;
  offsetOffMobile?: boolean;
}>;

function SectionLink({
  title,
  to = "",
  asButton = false,
  offsetOff = false,
  offsetOffMobile = false,
  children,
}: Props) {
  return (
    <div
      data-aos="fade-up"
      className={classNames(
        "text-center text-sm dp:text-2xl",
        !offsetOff && !offsetOffMobile && "mt-5 dp:mt-10",
        offsetOffMobile && "dp:mt-10"
      )}
    >
      {children || (
        <LinkRoute asButton={asButton} to={to}>
          {title}
        </LinkRoute>
      )}
    </div>
  );
}

export default SectionLink;
