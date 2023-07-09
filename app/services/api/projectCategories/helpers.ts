import { TabsItem } from "~/components/base/tabs/types";
import { ProjectCategory } from "./types";

export const mapProjectCategories = (category: ProjectCategory): TabsItem => ({
  id: category.id,
  title: category.attributes.name,
});
