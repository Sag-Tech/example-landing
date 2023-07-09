export type SocialVariants =
  | "facebook"
  | "twitter"
  | "skype"
  | "medium"
  | "linkedin"
  | "telegram";

export type Social = {
  id: SocialVariants;
  href: string;
};

export type Socials = Array<Social>;

export type SocialDefaultStyle = "white" | "blue";
