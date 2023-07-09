import { Stack } from "../types";
import { Technology } from "./types";

export const mapTechnologyToStack = ({
  id,
  attributes,
}: Technology): Stack => ({
  id,
  category:
    attributes.categories && attributes.categories.data
      ? attributes.categories.data.map(category => category.id)
      : [],
  imageURL: attributes.icon?.data.attributes.url,
  name: attributes.name,
});
