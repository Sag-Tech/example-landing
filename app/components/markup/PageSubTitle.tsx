import type { PropsWithChildren } from "react";
import SectionTitle from "~/components/layout/Section/SectionTitle";
import { VariantTypoTags, VariantTypoTagsStyles } from "../Typo/types";

type Props = PropsWithChildren<{
  title?: string;
  tag?: VariantTypoTags;
  tagStyle?: VariantTypoTagsStyles;
  html?: string;
}>;

export default function PageSubTitle({
  html,
  tag,
  tagStyle = "subtitle",
  children,
  title,
}: Props) {
  return (
    <SectionTitle
      className="mt-5 dp:mt-10 mb-2.5 dp:mb-5"
      color="dark"
      tag={tag}
      tagStyles={tagStyle}
      title={title}
      html={html}
    >
      {children}
    </SectionTitle>
  );
}
