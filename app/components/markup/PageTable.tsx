/* eslint-disable react/no-array-index-key */
import cn from "classnames";
import { useMemo } from "react";
import { PostTableData } from "~/services/api/posts/types";
import Typo from "../Typo";

type Props = {
  table: PostTableData;
  className?: string;
};

const tdClasses = "p-5 dp:first-of-type:pl-10 dp:last-of-type:pr-10";

export default function PageTable({ table, className }: Props) {
  const { withHeadings, content } = table;

  const rows = useMemo(
    () =>
      withHeadings
        ? { th: content.slice(0, 1), td: content.slice(1) }
        : { th: null, td: content },
    [withHeadings, content]
  );

  return (
    <table className={cn("w-full", className)}>
      <thead className="bg-[#EEEFF2]">
        {rows.th ? (
          <tr className="text-left">
            {rows.th[0].map((th, idx) => (
              <th key={idx} className={tdClasses}>
                <Typo html={th} fw="medium" tag="span" tagStyles="p" />
              </th>
            ))}
          </tr>
        ) : null}
      </thead>
      <tbody className="bg-grey">
        {rows.td.map((tr, idx) => (
          <tr key={idx}>
            {tr.map((td, i) => (
              <td key={i} className={tdClasses}>
                <Typo html={td} tag="span" tagStyles="p" />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
