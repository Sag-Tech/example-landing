import type { PropsWithChildren } from "react";
import Typo from "~/components/Typo";
import { VariantTypoTagsStyles } from "../Typo/types";

type Props = PropsWithChildren<{
  title?: string;
  className?: string;
  tagStyles?: VariantTypoTagsStyles;
}>;

function PageHeading({ className, children, title, tagStyles = "h2" }: Props) {
  return (
    <Typo
      className={className}
      tag="h1"
      tagStyles={tagStyles}
      fw="medium"
      color="dark"
    >
      {children || title}
    </Typo>
  );
}

export default PageHeading;
