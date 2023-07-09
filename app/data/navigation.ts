import {
  ANCHOR_ABOUT,
  ANCHOR_BLOG,
  ANCHOR_CASE,
  ANCHOR_CONTACT,
  ANCHOR_SCALABILITY,
  ANCHOR_SERVICES,
  ANCHOR_STACK,
  ANCHOR_WORK,
  PAGE_BLOG,
  PAGE_CASE,
} from "~/constants/paths";

export const NAVBAR_LINKS = [
  {
    value: "About Company",
    href: `/${ANCHOR_ABOUT}`,
  },
  {
    value: "Services",
    href: `/${ANCHOR_SERVICES}`,
  },
  {
    value: "Case studies",
    href: `/${ANCHOR_CASE}`,
    innerHref: PAGE_CASE,
  },
  {
    value: "Tech stack",
    href: `/${ANCHOR_STACK}`,
  },
  {
    value: "How We Work",
    href: `/${ANCHOR_WORK}`,
  },
  {
    value: "Blog",
    href: `/${ANCHOR_BLOG}`,
    innerHref: PAGE_BLOG,
  },
  {
    value: "Scalability",
    href: `/${ANCHOR_SCALABILITY}`,
  },
  {
    value: "Contact us",
    href: `/${ANCHOR_CONTACT}`,
    innerAnchor: true,
  },
];
