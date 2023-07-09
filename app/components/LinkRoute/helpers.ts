import { LinkRouteProps } from "./LinkRoute";

export const getLinkClasses = ({
  isUnderline,
  defaultStyle,
  display,
}: Partial<LinkRouteProps>) => {
  return [
    "transition duration-300 active:no-underline",
    display,
    isUnderline && "underline",
    defaultStyle === "primary" && "text-blue hover:text-green500",
  ];
};
