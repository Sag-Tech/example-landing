import cn from "classnames";
import Typo from "~/components/Typo";

type Props = {
  className?: string;
  isBlur?: boolean;
  isScrolled?: boolean;
};

function HeaderPhone({ isScrolled, isBlur, className }: Props) {
  return (
    <a
      className={cn(
        "inline-block hover:text-green duration-300 transition-colors",
        {
          "text-white": isBlur,
          "text-blue": !isBlur,
        }
      )}
      href="tel:+19292351776"
    >
      <Typo
        tag="h4"
        className={cn(
          "!text-[16px] dp:!text-[14px] leading-6 whitespace-nowrap transition-font duration-300",
          isScrolled ? "" : "dpb:!text-[20px]",
          className
        )}
        color="current"
      >
        +1 (929) 235-1776
      </Typo>
    </a>
  );
}

export default HeaderPhone;
