import { createCookie } from "@remix-run/node";

export const bannerCookie = createCookie("cookies", {
  maxAge: 31_536_000,
});
