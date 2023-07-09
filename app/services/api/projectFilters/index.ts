import { stringifyQuery } from "~/helpers/query";
import ApiBase from "../base";
import { RequestParams } from "../types";
import { GetProjectFiltersResponse } from "./types";

class ApiProjectFilters extends ApiBase {
  public getProjectFilters = (searchParams?: RequestParams) => {
    const search = searchParams ? stringifyQuery(searchParams) : "";
    return this.get<never, GetProjectFiltersResponse>(search);
  };
}

const apiProjectFilters = new ApiProjectFilters("/project-filter");

export default apiProjectFilters;
