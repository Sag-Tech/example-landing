import { json, redirect } from "@remix-run/node";
import { PAGE_404 } from "~/constants/paths";
import { bannerCookie } from "~/cookie.server";

export async function loader() {
  return redirect(PAGE_404);
}

export async function action() {
  return json(
    { showBanner: false },
    {
      headers: {
        "Set-Cookie": await bannerCookie.serialize({
          showBanner: false,
        }),
      },
    }
  );
}
