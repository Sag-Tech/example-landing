import type { PropsWithChildren } from "react";
import Divider from "~/components/Divider";

import Typo from "~/components/Typo/Typo";
import { VariantTypoTags } from "../Typo/types";

type Props = PropsWithChildren<{
  title?: string;
  tag?: VariantTypoTags;
}>;
function CardSubtitle({ title, tag = "h4" }: Props) {
  return (
    <div>
      <Typo tag={tag} tagStyles="h6" color="blue" className="mb-[10px]">
        {title}
      </Typo>
      <Divider size="xs" />
    </div>
  );
}

export default CardSubtitle;
