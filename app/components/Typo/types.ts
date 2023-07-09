/* eslint-disable no-shadow */
export type VariantTypoTags =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div";

export type VariantTypoTagsStyles =
  | VariantTypoTags
  | "title"
  | "titleH2"
  | "subtitle"
  | "pbig"
  | "pmedium"
  | "pageheading";

export type VariantTypoColors =
  | "white"
  | "transparent"
  | "dark"
  | "blue"
  | "blue300"
  | "blue500"
  | "ocean"
  | "green"
  | "green300"
  | "green500"
  | "grey"
  | "current"
  | "inherit";

enum FontWeight {
  "light" = 300,
  "normal" = 400,
  "medium" = 500,
  "semibold" = 600,
  "bold" = 700,
}

export type VariantTypoFontWeight = keyof typeof FontWeight;
