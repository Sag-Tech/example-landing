import { TabsItem } from "~/components/base/tabs/types";
import { TechnologyCategory } from "./types";

export const mapTechnologyCategories = (
  category: TechnologyCategory
): TabsItem => ({
  id: category.id,
  title: category.attributes.name,
});
