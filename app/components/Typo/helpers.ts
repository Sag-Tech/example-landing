/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
/* eslint-disable security/detect-object-injection */
import type { TypoProps } from "./Typo";

const BASE_TEXT_CLASSES = "text-[14px] dp:text-[16px] leading-5 dp:leading-6";

const tagClasses = {
  h1: "font-light text-4xl leading-10 dp:text-[64px] dp:leading-[80px] dpb:text-8xl dpb:leading-[120px]",
  h2: "text-[20px] leading-[28px] dp:text-[36px] dp:leading-[48px] dpb:text-[48px] dpb:leading-[60px] font-normal lp:font-medium",
  h3: "text-xl dp:text-4xl dp:!leading-[42px] inline-block",
  h4: "text-4xl",
  h5: "text-sm leading-4",
  h6: "text-base leading-6",
  p: BASE_TEXT_CLASSES,
  div: BASE_TEXT_CLASSES,
  span: BASE_TEXT_CLASSES,
  pmedium: "text-[14px] leading-5 dp:text-[18px] dp:leading-[24px]",
  pbig: "text-[14px] leading-5 dp:text-[16px] dp:leading-[24px]",
  title: "text-[20px] dp:text-[24px] leading-7 dp:leading-8",
  titleH2: "text-[16px] dp:text-[18px] leading-5 dp:leading-6",
  pageheading:
    "text-[24px] dp:text-[36px] dpb:text-[48px] leading-[32px] dp:leading-[48px] dpb:leading-[60px]",
  subtitle: "text-[14px] dp:text-[24px] leading-5 leading-7",
};

export const getTypoClasses = ({
  color,
  tagStyles,
  tag,
  className,
  isGradient,
  isShadow,
  isUppercase,
  fw,
  isCenter,
  align,
}: TypoProps) => {
  return [
    (tag || tagStyles) && tagClasses[tagStyles || tag || "p"],
    color && `text-${color}`,
    isGradient &&
      "text-fill-transparent bg-gradient-to-r from-[#00A983] to-[#3162AC] bg-clip-text",
    isShadow && "drop-shadow-[0_0_20px_rgba(48,198,157,0.3)]",
    fw && `font-${fw}`,
    isUppercase && "uppercase",
    isCenter && "text-center",
    align && `text-${align}`,
    className,
  ];
};
