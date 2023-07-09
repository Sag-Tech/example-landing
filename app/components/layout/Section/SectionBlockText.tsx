import Typo from "~/components/Typo";
import SectionSubtitle from "./SectionSubtitle";

type Props = {
  title?: string;
  text?: string;
  isAnimated?: boolean;
};

function SectionBlockText({ isAnimated = true, title, text }: Props) {
  const animatedAttr = isAnimated ? { "data-aos": "fade-up" } : {};
  return (
    <div>
      <div {...animatedAttr} className="mb-2.5 dp:mb-5">
        <SectionSubtitle title={title} />
      </div>
      <div {...animatedAttr}>
        <Typo tag="p">{text}</Typo>
      </div>
    </div>
  );
}

export default SectionBlockText;
