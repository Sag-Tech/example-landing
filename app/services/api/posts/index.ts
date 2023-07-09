import { stringifyQuery } from "~/helpers/query";
import ApiBase from "../base";
import { RequestParams } from "../types";
import { GetPostsResponse } from "./types";

class ApiPosts extends ApiBase {
  public getPosts = (searchParams?: RequestParams) => {
    const search = searchParams ? stringifyQuery(searchParams) : "";
    return this.get<never, GetPostsResponse>(search);
  };

  public getPost = (webUrl: string) =>
    this.get<never, GetPostsResponse>(
      `?filters[webUrl]=${webUrl}&populate=deep`
    );
}

const apiPost = new ApiPosts("/posts");

export default apiPost;
