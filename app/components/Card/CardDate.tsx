import type { PropsWithChildren } from "react";
import type { VariantTypoColors } from "~/components/Typo/types";

import Typo from "~/components/Typo/Typo";

type Props = PropsWithChildren<{
  date?: string;
  color?: VariantTypoColors;
}>;

function CardDate({ date, color = "blue" }: Props) {
  return (
    <Typo tag="p" tagStyles="h6" color={color} className="whitespace-nowrap">
      {date}
    </Typo>
  );
}

export default CardDate;
