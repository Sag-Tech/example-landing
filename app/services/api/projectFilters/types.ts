import { ProjectCategory } from "../projectCategories/types";
import { ResponseDefault } from "../types";

export type GetProjectFiltersResponse = ResponseDefault<{
  id: string;
  attributes: {
    filters: {
      data: Array<ProjectCategory>;
    };
  };
}>;
