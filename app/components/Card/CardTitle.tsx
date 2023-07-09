import type { PropsWithChildren } from "react";

import Typo from "~/components/Typo/Typo";

type Props = PropsWithChildren<{
  title?: string;
}>;

function CardTitle({ title }: Props) {
  return (
    <Typo tag="h3" tagStyles="title" fw="medium" color="dark">
      {title}
    </Typo>
  );
}

export default CardTitle;
