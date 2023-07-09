import type { PropsWithChildren } from "react";
import Typo from "~/components/Typo";
import { VariantTypoFontWeight } from "~/components/Typo/types";

type Props = PropsWithChildren<{
  title?: string;
  fw?: VariantTypoFontWeight;
  html?: string;
}>;

export default function PageListItemTitle({
  title,
  children,
  fw = "medium",
  html,
}: Props) {
  return (
    <Typo html={html} tag="h3" tagStyles="p" fw={fw} className="mb-[10px]">
      {children || title}
    </Typo>
  );
}
