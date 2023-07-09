import { PostQuoteData } from "~/services/api/posts/types";
import Typo from "~/components/Typo";

type Props = {
  quote: PostQuoteData;
  className?: string;
};

export default function PageQuote({ quote, className }: Props) {
  return (
    <div className={className}>
      <div className="mb-2.5 rounded-lg py-2.5 dp:py-5 px-5 dp:px-10 bg-gradient-to-r from-[#e6f5f3] to-[#eaf0f6]">
        <Typo
          tagStyles="p"
          fw="medium"
          align={quote.alignment}
          className="italic"
          tag="p"
        >
          “ {quote.text} ”
        </Typo>
      </div>
      {quote.caption && <Typo>{quote.caption}</Typo>}
    </div>
  );
}
