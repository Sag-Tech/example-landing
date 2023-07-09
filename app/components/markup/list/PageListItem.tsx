import type { PropsWithChildren } from "react";

export default function PageListItem({ children }: PropsWithChildren) {
  return <li className="text-list-item">{children}</li>;
}
