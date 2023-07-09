import { ProjectCategory } from "../projectCategories/types";
import { Technology } from "../technologies/types";
import { Image, MetaSeo, ResponseDefault } from "../types";

export type Project = {
  id: string;
  attributes: {
    id: string;
    title: string;
    banner: {
      data: null | Image;
    };
    categories: {
      data: Array<ProjectCategory>;
    };
    createdAt: string;
    description: string;
    preview: {
      data: null | Image;
    };
    previewLong: {
      data: null | Image;
    };
    projectLife: string;
    publishedAt: string;
    results: string;
    seo: MetaSeo;
    slogan: string | null;
    subtitle: string;
    client: string;
    team: string;
    technologies: {
      data: Array<Technology>;
    };
    updatedAt: string;
    webUrl: string;
  };
};

export type ProjectCard = {
  tags?: Array<string>;
  id: string;
  webUrl: string;
  subtitle?: string;
  title: string;
  text: string;
  url: string;
  url2x: string;
  alt: string;
};

export type GetProjectsResponse = ResponseDefault<Array<Project>>;
export type GetProjectResponse = ResponseDefault<Project>;
