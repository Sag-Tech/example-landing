/* eslint-disable no-undef */
/* eslint-disable no-shadow */

import { DEFAULT_FETCH_LIMIT } from "~/constants/pagination";

enum RequestParamsEnum {
  populate = "populate",
  pageSize = "pagination[pageSize]",
  page = "pagination[page]",
  sort = "sort",
}

export type RequestParams = {
  [RequestParamsEnum.populate]?: string;
  [RequestParamsEnum.sort]?: string;
  [RequestParamsEnum.page]?: number;
  [RequestParamsEnum.pageSize]?: number;
  [key: string]: string | number | undefined;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type ResponseMeta = {
  pagination: Pagination;
};

export type ResponseDefault<T> = {
  data: T;
  meta: ResponseMeta;
};

export type ImageFormat = {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  url: string;
  width: number;
};

export type Image = {
  id: string;
  attributes: {
    alternativeText: null | string;
    caption: null | string;
    createdAt: string;
    ext: string;
    hash: string;
    height: number;
    mime: string;
    name: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null | string;
    size: number;
    updatedAt: string;
    url: string;
    width: number;
    formats: {
      large?: ImageFormat;
      small?: ImageFormat;
      medium?: ImageFormat;
      thumbnail?: ImageFormat;
    };
  };
};

export type MetaSeo = {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string | null;
  metaImage: {
    data: Image;
  };
  metaRobots: string | null;
};

export type Stack = {
  id: string;
  name: string;
  imageURL: string;
  category: Array<string>;
};

export const DEFAULT_PAGINATION = {
  "pagination[page]": 1,
  "pagination[pageSize]": DEFAULT_FETCH_LIMIT,
  sort: "date:desc",
};
