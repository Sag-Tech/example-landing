import { TabsItem } from "~/components/base/tabs/types";
import { PostCategory } from "./types";

export const mapPostCategories = (category: PostCategory): TabsItem => ({
  id: category.id,
  title: category.attributes.name,
});
