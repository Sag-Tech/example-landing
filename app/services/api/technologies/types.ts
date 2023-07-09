/* eslint-disable no-use-before-define */
import { Project } from "../projects/types";
import { TechnologyCategory } from "../technologyCategories/types";
import { Image, ResponseDefault } from "../types";

export type Technology = {
  id: string;
  attributes: {
    name: string;
    projects: {
      data: Array<Project>;
    };
    categories: {
      data: Array<TechnologyCategory>;
    };
    icon: {
      data: Image;
    };
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
};

export type GetTechnologiesResponse = ResponseDefault<Array<Technology>>;
export type GetTechnologyResponse = ResponseDefault<Technology>;
