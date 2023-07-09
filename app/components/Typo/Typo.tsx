import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import cn from "classnames";

import type {
  VariantTypoColors,
  VariantTypoFontWeight,
  VariantTypoTags,
  VariantTypoTagsStyles,
} from "./types";
import { getTypoClasses } from "./helpers";

export type TypoProps = PropsWithChildren<{
  color?: VariantTypoColors;
  tag?: VariantTypoTags;
  tagStyles?: VariantTypoTagsStyles;
  className?: string;
  html?: string;
  isShadow?: boolean;
  isGradient?: boolean;
  isUppercase?: boolean;
  isCenter?: boolean;
  fw?: VariantTypoFontWeight;
  align?: "center" | "left" | "right";
}>;

function Typo({
  isShadow,
  isGradient,
  color,
  tag = "p",
  tagStyles,
  children,
  className,
  isUppercase,
  fw,
  html,
  isCenter,
  align,
}: TypoProps) {
  const Component = useMemo(() => tag, [tag]);
  const classes = useMemo(
    () =>
      cn(
        getTypoClasses({
          isShadow,
          isGradient,
          tagStyles,
          color,
          tag,
          className,
          isUppercase,
          fw,
          isCenter,
          align,
        })
      ),
    [
      fw,
      align,
      isCenter,
      isUppercase,
      isShadow,
      isGradient,
      tagStyles,
      color,
      tag,
      className,
    ]
  );

  return html ? (
    <Component className={classes} dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <Component className={classes}>{children}</Component>
  );
}

export default Typo;
