import { PostCategory } from "../postCategories/types";
import { ResponseDefault } from "../types";

export type GetPostFiltersResponse = ResponseDefault<{
  id: string;
  attributes: {
    filters: {
      data: Array<PostCategory>;
    };
  };
}>;
