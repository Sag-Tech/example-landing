import cn from "classnames";
import type { PropsWithChildren } from "react";
import Typo from "~/components/Typo";

type Props = PropsWithChildren<{
  title: string;
  className: string;
}>;

function Modal({ children, title, className }: Props) {
  return (
    <div
      className={cn(
        "relative z-30 p-5 lp:p-10",
        "bg-white rounded-[20px] shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)] ",
        className
      )}
    >
      {title && (
        <div className="mb-5">
          <Typo
            tag="h2"
            className="!text-xl lp:!text-4xl text-center text-blue"
          >
            {title}
          </Typo>
        </div>
      )}
      {children}
    </div>
  );
}

export default Modal;
