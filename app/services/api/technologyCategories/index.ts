import { stringifyQuery } from "~/helpers/query";
import ApiBase from "../base";
import { RequestParams } from "../types";
import { GetTechnologyCategoriesResponse } from "./types";

class ApiTechnologyCategories extends ApiBase {
  public getTechnologyCategories = (searchParams?: RequestParams) => {
    const search = searchParams ? stringifyQuery(searchParams) : "";
    return this.get<never, GetTechnologyCategoriesResponse>(search);
  };
}

const apiTechnologyCategories = new ApiTechnologyCategories(
  "/technology-categories"
);

export default apiTechnologyCategories;
