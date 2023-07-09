/* eslint-disable no-shadow */
// import { ProjectCategory } from "../projectCategories/types";
import { Image, ImageFormat, MetaSeo, ResponseDefault } from "../types";

export type PostAuthor = {
  id: string;
  name: string;
  position: string;
  workspace: string;
};

enum PostContentBlocksNums {
  paragraph = "paragraph",
  header = "header",
  image = "image",
  list = "list",
  table = "table",
  code = "code",
  quote = "quote",
  delimiter = "delimiter",
}

type PostContentBlocksVariants = keyof typeof PostContentBlocksNums;

export type PostTextData = {
  text?: string;
  level?: number;
};

type PostCategory = {
  id: string;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

export type PostImageData = {
  file: {
    alt: string;
    formats: {
      large: ImageFormat;
      small: ImageFormat;
      medium: ImageFormat;
      thumbnail: ImageFormat;
    };
    height: number;
    mime: string;
    size: number;
    url: string;
    width: number;
  };
  caption?: string;
  stretched?: boolean;
};

export type PostListData = {
  items: Array<string>;
  style: "ordered" | "unordered";
  level?: string;
};

export type PostTableData = {
  content: Array<Array<string>>;
  withHeadings: boolean;
};

export type PostCodeData = {
  code: string;
};

export type PostQuoteData = {
  alignment: "left" | "center" | "right";
  caption: string;
  text: string;
};

export type PostDelimiterData = object;

type PostContentBlocksData = PostTextData | PostImageData | PostListData;

type PostContentBlocks = {
  id: string;
  type: PostContentBlocksVariants;
  data: PostContentBlocksData;
};

export type PostContent = {
  time: string;
  blocks: Array<PostContentBlocks>;
  version: string;
};

export type Post = {
  id: string;
  attributes: {
    previewTitle: string;
    previewSubtitle: string;
    content: string;
    date: string;
    updatedAt: string;
    publishedAt: string;
    createdAt: string;
    webUrl: string;
    preview: {
      data: null | Image;
    };
    previewVertical: {
      data: null | Image;
    };
    author: PostAuthor;
    category: {
      data: PostCategory;
    };
    seo: MetaSeo;
  };
};

export type PostCard = {
  id: string;
  webUrl: string;
  subtitle: string;
  title: string;
  text: string;
  date: string;
  url: string;
  url2x: string;
  urlV: string;
  urlV2x: string;
};

export type GetPostsResponse = ResponseDefault<Array<Post>>;
export type GetPostResponse = ResponseDefault<Post>;
