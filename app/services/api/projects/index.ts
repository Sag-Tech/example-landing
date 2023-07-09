import { stringifyQuery } from "~/helpers/query";
import ApiBase from "../base";
import { RequestParams } from "../types";
import { GetProjectsResponse } from "./types";

class ApiProjects extends ApiBase {
  public getProjects = (searchParams?: RequestParams) => {
    const search = searchParams ? stringifyQuery(searchParams) : "";
    return this.get<never, GetProjectsResponse>(search);
  };

  public getProject = (webUrl: string) =>
    this.get<never, GetProjectsResponse>(
      `?filters[webUrl]=${webUrl}&populate=deep`
    );
}

const apiProject = new ApiProjects("/projects");

export default apiProject;
