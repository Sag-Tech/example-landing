import { stringifyQuery } from "~/helpers/query";
import ApiBase from "../base";
import { RequestParams } from "../types";
import { GetPostFiltersResponse } from "./types";

class ApiPostFilters extends ApiBase {
  public getPostFilters = (searchParams?: RequestParams) => {
    const search = searchParams ? stringifyQuery(searchParams) : "";
    return this.get<never, GetPostFiltersResponse>(search);
  };
}

const apiPostFilters = new ApiPostFilters("/post-filter");

export default apiPostFilters;
