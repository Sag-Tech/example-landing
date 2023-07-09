/* eslint-disable no-param-reassign */
import { PAGE_CASE } from "~/constants/paths";
import { ProjectCategory } from "../projectCategories/types";
import { Project, ProjectCard } from "./types";

export const getCaseCategoriesTitle = (
  categories: Array<ProjectCategory>
): string => {
  if (Array.isArray(categories)) {
    return categories
      .reduce((arr, category) => {
        arr.push(category.attributes.name);
        return arr;
      }, [] as Array<string>)
      .join(", ");
  }

  return "";
};

export const mapProject = (project: Project): ProjectCard => {
  const { preview } = project.attributes;

  return {
    id: project.id,
    webUrl: project.attributes.webUrl,
    url: preview.data ? preview.data.attributes.formats.small?.url || "" : "",
    url2x: "",
    title: project.attributes.title,
    subtitle: getCaseCategoriesTitle(project.attributes.categories?.data),
    text: project.attributes.subtitle,
    alt: project.attributes.title,
  };
};

export const getProjectLink = (caseId: string): string => {
  return `${PAGE_CASE}/${caseId}`;
};
