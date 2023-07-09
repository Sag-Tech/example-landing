import { stringifyQuery } from "~/helpers/query";
import ApiBase from "../base";
import { RequestParams } from "../types";
import { GetPostCategoriesResponse } from "./types";

class ApiPostCategories extends ApiBase {
  public getPostCategories = (searchParams?: RequestParams) => {
    const search = searchParams ? stringifyQuery(searchParams) : "";
    return this.get<never, GetPostCategoriesResponse>(search);
  };
}

const apiPostCategories = new ApiPostCategories("/post-categories");

export default apiPostCategories;
