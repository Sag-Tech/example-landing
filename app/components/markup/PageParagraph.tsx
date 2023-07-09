import cn from "classnames";
import type { PropsWithChildren } from "react";
import Typo from "../Typo";

type Props = PropsWithChildren<{
  html?: string;
  offsetBig?: boolean;
}>;

export default function PageParagraph({ html, children, offsetBig }: Props) {
  return (
    <Typo
      html={html}
      tag="p"
      className={cn(
        offsetBig ? "mb-5" : "mb-[10px]",
        offsetBig ? "!leading-[28px] dp:!leading-[32px]" : "",
        html && "html-markup"
      )}
    >
      {children}
    </Typo>
  );
}
