import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useCallback, useMemo, useState } from "react";
import Tabs from "~/components/base/tabs";
import BlogSection from "~/components/BlogSection";
import PageContainer from "~/components/layout/PageContainer";
import Offset from "~/components/Offset";
import apiPostCategories from "~/services/api/postCategories";
import { mapPostCategories } from "~/services/api/postCategories/helpers";
import { PostCategory } from "~/services/api/postCategories/types";
import apiPostFilters from "~/services/api/postFilters";
import apiPost from "~/services/api/posts";
import { Post } from "~/services/api/posts/types";
import { DEFAULT_PAGINATION, Pagination } from "~/services/api/types";

const ALL_TAB_ID = "all";
const OTHER_TAB_ID = "other";
const ALL_TAB_ITEM = { id: ALL_TAB_ID, title: "All posts" };
const OTHER_TAB_ITEM = { id: OTHER_TAB_ID, title: "Other" };

type LoaderData = {
  posts: Array<Post> | [];
  postsPagination: Pagination | null;
  postCategoriesFilters: Array<PostCategory> | [];
  postCategoriesCount: number;
};

export const loader = async () => {
  return Promise.all([
    apiPost.getPosts({
      populate: "deep",
      ...DEFAULT_PAGINATION,
      "pagination[pageSize]": 6, // TODO remove after tests
    }),
    apiPostFilters.getPostFilters({
      populate: "deep,2",
      "pagination[pageSize]": 1000,
    }),
    apiPostCategories.getPostCategories(),
  ])
    .then(res => {
      return {
        posts: res[0].data,
        postsPagination: res[0].meta.pagination,
        postCategoriesFilters: res[1].data.attributes.filters.data,
        postCategoriesCount: res[2].data.length,
      };
    })
    .catch(() => ({
      posts: [],
      postsPagination: null,
      postCategoriesFilters: [],
      postCategoriesCount: 0,
    }));
};

export default function Blog() {
  const data = useLoaderData();
  const [activeTab, setActiveTab] = useState<string>(ALL_TAB_ID);

  const { postsPagination, posts, postCategoriesFilters, postCategoriesCount } =
    data as LoaderData;

  const tabs = useMemo(() => {
    if (Array.isArray(postCategoriesFilters)) {
      const filters = [
        ALL_TAB_ITEM,
        ...postCategoriesFilters.map((category: PostCategory) =>
          mapPostCategories(category)
        ),
      ];

      if (postCategoriesCount > postCategoriesFilters.length) {
        filters.push(OTHER_TAB_ITEM);
      }

      return filters;
    }

    return [];
  }, [postCategoriesFilters, postCategoriesCount]);

  const handleFilterPosts = useCallback(
    (loadedPosts: Array<Post>) => {
      if (activeTab === ALL_TAB_ID) {
        return loadedPosts;
      }

      if (activeTab === OTHER_TAB_ID) {
        return loadedPosts.filter(
          (post: Post) =>
            !postCategoriesFilters.some(
              category => category.id === post.attributes.category.data.id
            )
        );
      }

      return loadedPosts.filter((post: Post) => {
        return +post.attributes.category.data.id === +activeTab;
      });
    },
    [activeTab, postCategoriesFilters]
  );

  const handleToggleTab = useCallback(
    (id: string) => {
      setActiveTab(id);
    },
    [setActiveTab]
  );

  return (
    <PageContainer>
      <BlogSection
        pagination={postsPagination}
        type="grid"
        posts={posts}
        onFilter={handleFilterPosts}
      >
        <Offset offset="small" className="flex justify-center">
          <div data-aos="fade-up" className="w-full">
            <Tabs
              isScrollable
              tabs={tabs}
              activeTab={activeTab}
              onToggleTab={handleToggleTab}
            />
          </div>
        </Offset>
      </BlogSection>
    </PageContainer>
  );
}

export const meta: MetaFunction = () => ({
  title: "Build web and mobile apps that users love – Nyoka",
  description:
    "Get valuable insights and industry updates on AI, blockchain, mobile apps & web services from our software development blog. Gain knowledge of current trends and technologies that help your business stay ahead of the curve. Visit our blog page today.",
});
