import Typo from "~/components//Typo";
import { PostAuthor } from "~/services/api/posts/types";

type Props = PostAuthor;

const COLOR = "blue";

export default function BlogAuthor({ name, position, workspace }: Props) {
  return (
    <div className="py-5 dp:py-10 border-y border-y-blue/20">
      {name && (
        <Typo color={COLOR} fw="medium">
          {name}
        </Typo>
      )}
      {position && <Typo color={COLOR}>{position}</Typo>}
      {workspace && <Typo color={COLOR}>{workspace}</Typo>}
    </div>
  );
}
