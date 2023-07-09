import type { PropsWithChildren } from "react";
import cn from "classnames";

import Typo from "~/components/Typo";
import { VariantTypoFontWeight } from "~/components/Typo/types";

type Props = PropsWithChildren<{
  text: string;
  title?: string;
  styles?: string;
  fw?: VariantTypoFontWeight;
}>;

function Point({ text, title, fw, styles, children }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center gap-2.5 sm:gap-5",
        styles
      )}
    >
      {children}
      {title && (
        <Typo
          tag="h3"
          tagStyles="pmedium"
          fw="medium"
          className="whitespace-pre-wrap"
        >
          {title}
        </Typo>
      )}
      <Typo tag="p" fw={fw} className="whitespace-pre-wrap">
        {text}
      </Typo>
    </div>
  );
}

export default Point;
