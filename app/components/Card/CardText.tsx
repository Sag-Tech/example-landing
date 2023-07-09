import type { PropsWithChildren } from "react";

import Typo from "~/components/Typo/Typo";

type Props = PropsWithChildren<{
  text?: string;
}>;

function CardText({ text, children }: Props) {
  return <Typo tag="p"> {text || children}</Typo>;
}

export default CardText;
