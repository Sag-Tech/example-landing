import type { ButtonProps } from "./Button";

const buttonClasses = {
  small: "px-[20px]",
  normal: "px-[34px]",
};

export const getButtonClasses = ({
  fullWidth,
  size,
  className,
}: ButtonProps) => [
  "relative buttonGradient",
  "hover:bg-[100%_center]",
  "justify-center items-center  py-1 h-[40px] text-sm font-medium leading-4 uppercase text-white drop-shadow-[0_10px_20px_-8px_rgba(64,184,214,0.3)] rounded-[20px] disabled:opacity-20",
  fullWidth ? "flex w-full" : "inline-flex",
  size && buttonClasses[size],
  className,
];
