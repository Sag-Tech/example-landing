import Typo from "~/components/Typo";

type Props = {
  title?: string;
  className?: string;
  isGradient?: boolean;
};

function SectionSubtitle({ isGradient, title, className }: Props) {
  return (
    <Typo
      isGradient={isGradient}
      className={className}
      fw="medium"
      tag="h3"
      tagStyles="subtitle"
    >
      {title}
    </Typo>
  );
}

export default SectionSubtitle;
