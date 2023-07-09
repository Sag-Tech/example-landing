import cn from "classnames";
import Typo from "~/components/Typo";

type Props = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

export default function Tab({ title, isActive, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        isActive ? "text-blue" : "text-green500 hover:bg-green/10",
        "whitespace-nowrap bg-white border-blue/10 border duration-300 rounded-[20px] py-2 px-5 transition-colors"
      )}
    >
      <Typo tag="span" tagStyles="p">
        {title}
      </Typo>
    </button>
  );
}
