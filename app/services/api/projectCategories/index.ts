import { stringifyQuery } from "~/helpers/query";
import ApiBase from "../base";
import { RequestParams } from "../types";
import { GetProjectCategoriesResponse } from "./types";

class ApiProjectCategories extends ApiBase {
  public getProjectCategories = (searchParams?: RequestParams) => {
    const search = searchParams ? stringifyQuery(searchParams) : "";
    return this.get<never, GetProjectCategoriesResponse>(search);
  };
}

const apiProjectCategories = new ApiProjectCategories("/project-categories");

export default apiProjectCategories;
