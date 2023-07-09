import type { PropsWithChildren } from "react";
import Typo from "~/components/Typo";
import type {
  VariantTypoColors,
  VariantTypoTags,
  VariantTypoTagsStyles,
} from "~/components/Typo/types";

type Props = PropsWithChildren<{
  title?: string;
  className?: string;
  color?: VariantTypoColors;
  tagStyles?: VariantTypoTagsStyles;
  isCenter?: boolean;
  tag?: VariantTypoTags;
  html?: string;
}>;

function SectionTitle({
  color = "blue",
  tagStyles = "h2",
  children,
  title,
  className,
  isCenter,
  tag = "h2",
  html,
}: Props) {
  return (
    <Typo
      tag={tag}
      isCenter={isCenter}
      className={className}
      tagStyles={tagStyles}
      fw="medium"
      color={color}
      html={html}
    >
      {children || title}
    </Typo>
  );
}

export default SectionTitle;
