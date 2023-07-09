import type { PropsWithChildren } from "react";
import { ANCHOR_BLOG, PAGE_BLOG } from "~/constants/paths";
import BlogCardsGrid from "~/components/grids/BlogCardsGrid";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import SectionLink from "~/components/layout/Section/SectionLink";
import BlogCardsList from "~/components/grids/BlogCardsList";
import BlogSlider from "../blog/BlogSlider";
import { Post } from "~/services/api/posts/types";
import { Pagination } from "~/services/api/types";
import ListLoader from "~/components/ListLoader";
import apiPost from "~/services/api/posts";

type Props = PropsWithChildren<{
  type?: "list" | "grid";
  title?: string;
  posts?: Array<Post>;
  containerSmall?: boolean;
  isLink?: boolean;
  isSliderMobile?: boolean;
  onFilter?: (posts: Array<Post>) => Array<Post>;
  pagination?: Pagination | null;
}>;

function BlogSection({
  title = "Blog",
  type = "grid",
  posts = [],
  containerSmall = false,
  isLink = false,
  isSliderMobile = false,
  pagination,
  onFilter = i => i,
  children,
}: Props) {
  const hiddenClasses = isSliderMobile ? "hidden dp:flex" : "";

  return (
    <SectionContainer
      id={ANCHOR_BLOG.slice(1)}
      containerSmallWidth={containerSmall}
      title={title}
      isCenter
      bgColor="grey"
      titleAnimated
      className="overflow-hidden"
    >
      {children}
      <>
        {type === "list" && pagination ? (
          <ListLoader<Post>
            defaultItems={posts}
            onFetch={apiPost.getPosts}
            defaultPagination={pagination}
          >
            {({ items }) => <BlogCardsList items={onFilter(items)} />}
          </ListLoader>
        ) : null}
        {type === "list" && !pagination ? (
          <BlogCardsList className={hiddenClasses} items={posts} />
        ) : null}

        {type === "grid" && pagination ? (
          <ListLoader<Post>
            defaultItems={posts}
            onFetch={apiPost.getPosts}
            defaultPagination={pagination}
          >
            {({ items }) => <BlogCardsGrid items={onFilter(items)} />}
          </ListLoader>
        ) : null}
        {type === "grid" && !pagination ? (
          <BlogCardsGrid className={hiddenClasses} items={posts} />
        ) : null}
        {isSliderMobile && <BlogSlider className="dp:hidden" posts={posts} />}
      </>

      {isLink && (
        <SectionLink offsetOffMobile title="All articles" to={PAGE_BLOG} />
      )}
    </SectionContainer>
  );
}

export default BlogSection;
