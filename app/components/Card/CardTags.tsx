import { Fragment, PropsWithChildren } from "react";
import Divider from "~/components/Divider";

import Typo from "~/components/Typo/Typo";
import { VariantTypoTags } from "../Typo/types";

type Props = PropsWithChildren<{
  list?: Array<string>;
  tag?: VariantTypoTags;
}>;
function CardTags({ list = [], tag = "h4" }: Props) {
  return (
    <div>
      <Typo tag={tag} tagStyles="h6" color="blue" className="mb-[10px]">
        {Array.isArray(list) &&
          list.map((i, idx, arr) => (
            <Fragment key={i}>
              <span className="inline-block">{i}</span>
              {idx < arr.length - 1 ? " / " : ""}
            </Fragment>
          ))}
      </Typo>
      <Divider size="xs" />
    </div>
  );
}

export default CardTags;
