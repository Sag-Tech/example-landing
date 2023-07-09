import { useMemo } from "react";
import type { MouseEventHandler, PropsWithChildren } from "react";
import cn from "classnames";
import type { VariantsButtonSize, VariantsButtonType } from "./types";
import { getButtonClasses } from "./helpers";
import Loader from "~/components/Loader";

export type ButtonProps = PropsWithChildren<{
  size?: VariantsButtonSize;
  type?: VariantsButtonType;
  onClick?: MouseEventHandler;
  className?: string;
  title?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  isFetching?: boolean;
  ariaLabel?: string;
}>;

function Button({
  size = "normal",
  type = "button",
  onClick,
  className,
  children,
  title,
  fullWidth = false,
  disabled = false,
  isFetching = false,
  ariaLabel,
}: ButtonProps) {
  const classes = useMemo(
    () =>
      cn(
        getButtonClasses({
          fullWidth,
          size,
          className,
        })
      ),
    [size, className, fullWidth]
  );

  const hiddenStyles = useMemo(
    () => ({ opacity: isFetching ? 0 : 1 }),
    [isFetching]
  );

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <span style={hiddenStyles}>{title || children}</span>
      {isFetching && (
        <div className="z-2 absolute top-1/2 -translate-y-1/2">
          <Loader />
        </div>
      )}
    </button>
  );
}

export default Button;
