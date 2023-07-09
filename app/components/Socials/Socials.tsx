import cn from "classnames";
import { useMemo } from "react";
import SocialIcon from "./SocialIcon";
import type { Social, SocialDefaultStyle } from "./types";

type Props = {
  items: Array<Social>;
  className?: string;
  defaultStyle?: SocialDefaultStyle;
};

export default function Socials({
  defaultStyle = "blue",
  items = [],
  className,
}: Props) {
  const classes = useMemo(() => {
    return cn("transition-colors duration-300", {
      "!text-blue dp:hover:!text-[#4C7387] active:!text-[#204155] focus:!text-[#204155]":
        defaultStyle === "blue",
      "!text-white dp:hover:!text-[white/80] active:!text-[#DADADA] focus:!text-[#DADADA]":
        defaultStyle === "white",
    });
  }, [defaultStyle]);

  return (
    <div className={cn("flex gap-5", className)}>
      {items.map(({ id, href }) => (
        <a
          className={classes}
          key={id}
          href={href}
          aria-label={id}
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <SocialIcon id={id} />
        </a>
      ))}
    </div>
  );
}
