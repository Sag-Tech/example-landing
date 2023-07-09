import cn from "classnames";
import { VariantTypoColors } from "../Typo/types";

type Props = {
  color?: VariantTypoColors;
};

function Loader({ color = "white" }: Props) {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-5 h-5",
        color && `text-${color}`
      )}
    >
      <svg preserveAspectRatio="xMidYMid" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          fill="none"
          r="30"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={5}
        >
          <animateTransform
            attributeName="transform"
            dur="1.5s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50;720 50 50"
          />
          <animate
            attributeName="stroke-dasharray"
            dur="1.5s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
            values="18 169;94 94;18 169"
          />
        </circle>
      </svg>
    </div>
  );
}

export default Loader;
