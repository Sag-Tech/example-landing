import { redirect } from "@remix-run/node";
import { PAGE_SERVICES } from "~/constants/paths";
import { ServicesTypesNum } from "~/data/services";

export const loader = async () => {
  return redirect(`${PAGE_SERVICES}/${ServicesTypesNum.mobile}`);
};

export default function Services() {
  return null;
}
