import cn from "classnames";
import Typo from "app/components/Typo";
import { Link } from "@remix-run/react";
import ArrowBack from "~/components/icons/ArrowBack";

type Props = {
  path: string;
  title?: string;
  className?: string;
  inline?: boolean;
};

function LinkBack({ inline, title = "Back", className, path }: Props) {
  return (
    <Link
      to={path}
      className={cn(
        "items-center text-blue hover:text-green500 focus:text-green700 transition-colors duration-300",
        inline ? "inline-flex" : "flex",
        className
      )}
    >
      <ArrowBack className="mr-[10px] text-current" />
      <Typo color="current" tag="p">
        {title}
      </Typo>
    </Link>
  );
}

export default LinkBack;
