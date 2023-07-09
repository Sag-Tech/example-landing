/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-array-index-key */
import cn from "classnames";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  code: string;
  className?: string;
};

export default function PageCode({ code, className }: Props) {
  return (
    <div
      className={cn(
        className,
        "bg-grey p-5 dp:p-10 border-l-[3px] border-l-blue"
      )}
    >
      <SyntaxHighlighter
        customStyle={{
          backgroundColor: "#FAFAFA",
        }}
        language="javascript"
        style={docco}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
