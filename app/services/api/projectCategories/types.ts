import { Project } from "../projects/types";
import { ResponseDefault } from "../types";

export type ProjectCategory = {
  id: string;
  attributes: {
    name: string;
    projects?: {
      data: Array<Project>;
    };
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
};

export type GetProjectCategoriesResponse = ResponseDefault<
  Array<ProjectCategory>
>;
