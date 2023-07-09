import { useMemo } from "react";
import cn from "classnames";
import type { LinkProps } from "@remix-run/react";
import { Link } from "@remix-run/react";
import type { ButtonProps } from "~/components/Button/Button";
import { getButtonClasses } from "~/components/Button/helpers";
import type { TypoProps } from "~/components/Typo";
import { getLinkClasses } from "./helpers";
import { getTypoClasses } from "../Typo/helpers";

type LinkBaseProps = LinkProps &
  TypoProps & {
    asButton?: boolean;
    defaultStyle?: "primary";
    display?: "inline" | "block" | "inline-block";
    isUnderline?: boolean;
    ariaLabel?: string;
  };

export type LinkRouteProps = Omit<ButtonProps, "type"> & LinkBaseProps;

function LinkRoute({
  size = "normal",
  className,
  children,
  title,
  fullWidth = false,
  asButton,
  display = "inline",
  defaultStyle = "primary",
  to,
  isUnderline = true,
  tagStyles,
  isGradient,
  isShadow,
  isUppercase,
  ariaLabel,
  fw,
}: LinkRouteProps) {
  const classes = useMemo(
    () =>
      cn(
        asButton && getButtonClasses({ fullWidth, size, className }),
        !asButton && [
          getLinkClasses({ defaultStyle, display, isUnderline }),
          getTypoClasses({
            isShadow,
            isGradient,
            tagStyles,
            isUppercase,
            fw,
            className,
          }),
        ]
      ),
    [
      isShadow,
      isGradient,
      tagStyles,
      className,
      isUppercase,
      fw,
      size,
      fullWidth,
      asButton,
      display,
      defaultStyle,
      isUnderline,
    ]
  );

  return (
    <Link aria-label={ariaLabel} to={to} className={classes}>
      {title || children}
    </Link>
  );
}

export default LinkRoute;
