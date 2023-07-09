/* eslint-disable no-param-reassign */
import { PAGE_BLOG } from "~/constants/paths";
import { formatDate } from "~/helpers/date";
import { Post, PostCard } from "./types";

export const mapPost = (post: Post): PostCard => {
  const { preview, previewVertical, category } = post.attributes;

  return {
    id: post.id,
    webUrl: post.attributes.webUrl,
    subtitle: category.data ? category.data.attributes.name : "",
    text: post.attributes.previewSubtitle,
    title: post.attributes.previewTitle,
    date: formatDate(post.attributes.date),
    url: preview && preview.data ? preview.data.attributes.url || "" : "",
    url2x: "",
    urlV:
      previewVertical && previewVertical.data
        ? previewVertical.data.attributes.url || ""
        : "",
    urlV2x: "",
  };
};

export const getPostLink = (postId: string): string => {
  return `${PAGE_BLOG}/${postId}`;
};
