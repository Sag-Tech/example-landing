import { Technology } from "../technologies/types";
import { ResponseDefault } from "../types";

export type TechnologyCategory = {
  id: string;
  attributes: {
    name: string;
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
    technologies?: { data: Array<Technology> };
  };
};

export type GetTechnologyCategoriesResponse = ResponseDefault<
  Array<TechnologyCategory>
>;
