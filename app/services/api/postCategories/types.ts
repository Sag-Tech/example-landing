import { Post } from "../posts/types";
import { ResponseDefault } from "../types";

export type PostCategory = {
  id: string;
  attributes: {
    name: string;
    posts?: {
      data: Array<Post>;
    };
    createdAt: string;
    publishedAt: string;
    updatedAt: string;
  };
};

export type GetPostCategoriesResponse = ResponseDefault<Array<PostCategory>>;
