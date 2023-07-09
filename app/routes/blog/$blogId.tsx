/* eslint-disable react/no-array-index-key */
import { LoaderFunction, MetaFunction, redirect } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";
import { useCallback, useMemo } from "react";
import BlogAuthor from "~/components/blog/BlogAuthor";
import BlogSection from "~/components/BlogSection";
import Divider from "~/components/Divider";
import Image from "~/components/Image";

import PageContainer from "~/components/layout/PageContainer";
import PageHeading from "~/components/layout/PageHeading";
import SectionBackContainer from "~/components/layout/Section/SectionBackContainer";
import LazyImage from "~/components/LazyImage";
import {
  PageList,
  PageListItem,
  PageListItemTitle,
} from "~/components/markup/list";
import PageCode from "~/components/markup/PageCode";
import PageParagraph from "~/components/markup/PageParagraph";
import PageQuote from "~/components/markup/PageQuote";
import PageSubTitle from "~/components/markup/PageSubTitle";
import PageTable from "~/components/markup/PageTable";
import Offset from "~/components/Offset";
import Socials from "~/components/Socials";
import Typo from "~/components/Typo";
import {
  VariantTypoTags,
  VariantTypoTagsStyles,
} from "~/components/Typo/types";
import { PAGE_404, PAGE_BLOG } from "~/constants/paths";
import { SOCIALS } from "~/data/socials";
import { formatDate } from "~/helpers/date";
import apiPost from "~/services/api/posts";
import {
  Post,
  PostCodeData,
  PostContent,
  PostImageData,
  PostListData,
  PostQuoteData,
  PostTableData,
  PostTextData,
} from "~/services/api/posts/types";

type LoaderData = {
  post: Post;
  posts: Array<Post>;
};

export const loader: LoaderFunction = async ({ params }) => {
  return Promise.all([
    apiPost.getPost(String(params.blogId)),
    apiPost.getPosts({
      populate: "deep",
      sort: "date:desc",
    }),
  ])
    .then(res => {
      return {
        post:
          res[0] && res[0].data && res[0].data.length === 1
            ? res[0].data[0]
            : null,
        posts: res[1].data.filter(p => p.id !== params.blogId),
      } as LoaderData;
    })
    .catch(() => {
      return redirect(PAGE_404);
    });
};

export const meta: MetaFunction = ({ data, location }) => {
  const { seo, previewTitle } = data.post.attributes;
  const title = `${seo.metaTitle || previewTitle} – Nyoka`;
  const description = seo.metaDescription;
  const { width, height, url } = seo.metaImage.data.attributes;
  const pageUrl = `https://nyoka.io${location.pathname}`;

  return {
    title,
    description,
    keywords: seo ? seo.keywords : "",
    "og:title": title,
    "og:url": pageUrl,
    "og:image": url,
    "og:image:width": String(width),
    "og:image:height": String(height),
    "og:description": description,
    "twitter:title": title,
    "twitter:url": pageUrl,
    "twitter:description": description,
    "twitter:image": url,
  };
};

export default function BlogId() {
  const data = useLoaderData();
  const { post, posts } = data as LoaderData;

  const filteredPosts = useMemo(() => {
    if (post && posts) {
      return posts.filter(p => p.id !== post.id);
    }

    return [];
  }, [posts, post]);

  const renderContent = useCallback(() => {
    const contentParsed: PostContent = JSON.parse(post.attributes.content);

    if (contentParsed) {
      return contentParsed.blocks.map(block => {
        switch (block.type) {
          case "header": {
            const t = block.data as PostTextData;
            const tag = `h${t.level}` as VariantTypoTags;
            let tagStyles = "title" as VariantTypoTagsStyles;

            if (t.level === 1) {
              tagStyles = "pageheading";
            } else if (t.level === 2) {
              tagStyles = "title";
            } else if (t.level === 3) {
              tagStyles = "titleH2";
            }

            return (
              <PageSubTitle
                html={t.text}
                tag={tag}
                tagStyle={tagStyles}
                key={block.id}
              />
            );
          }

          case "paragraph": {
            const t = block.data as PostTextData;
            return <PageParagraph offsetBig html={t.text} key={block.id} />;
          }

          case "image": {
            const img = block.data as PostImageData;

            return (
              <div
                key={block.id}
                data-aos="fade-up"
                className="dp:rounded-lg dp:overflow-hidden my-5 dp:my-10 dp:mx-0"
              >
                <LazyImage
                  url={img.file.url}
                  urlMob={img.file.formats.small.url}
                  alt={img.caption}
                  imgWidth={img.file.width}
                  imgHeight={img.file.height}
                />
                <Typo
                  className="!text-[13px] text-center mt-3"
                  color="grey"
                  tag="p"
                >
                  {img.caption}
                </Typo>
              </div>
            );
          }

          case "list": {
            const list = block.data as PostListData;
            const type = list.style;

            return (
              <PageList type={type} className="!my-5" key={block.id}>
                {list.items.map((listItem, idx) => (
                  <PageListItem key={idx}>
                    <PageListItemTitle html={listItem} fw="normal" />
                  </PageListItem>
                ))}
              </PageList>
            );
          }

          case "table": {
            const table = block.data as PostTableData;

            return (
              <div className="my-5 dp:my-10" data-aos="fade-up">
                <PageTable table={table} key={block.id} />
              </div>
            );
          }

          case "code": {
            const codeData = block.data as PostCodeData;

            return (
              <div className="my-5 dp:my-10" data-aos="fade-up">
                <PageCode code={codeData.code} key={block.id} />
              </div>
            );
          }

          case "quote": {
            const quote = block.data as PostQuoteData;

            return (
              <PageQuote
                quote={quote}
                className="my-5 dp:my-10"
                key={block.id}
              />
            );
          }

          case "delimiter": {
            return (
              <div key={block.id} className="flex justify-center my-5 dp:my-10">
                <Divider size="small" />
              </div>
            );
          }

          default:
            return null;
        }
      });
    }

    return null;
  }, [post]);

  return (
    <PageContainer>
      <SectionBackContainer
        subtitle={post.attributes.category.data.attributes.name}
        date={formatDate(post.attributes.date)}
        backPath={PAGE_BLOG}
      >
        <Offset offset="small">
          <div data-aos="fade-up">
            <PageHeading
              tagStyles="pageheading"
              title={post.attributes.previewTitle}
            />
          </div>
        </Offset>

        <Offset offset="small">
          <div data-aos="fade-up">
            <Image
              imgWidth={post.attributes.preview.data?.attributes.width}
              imgHeight={post.attributes.preview.data?.attributes.height}
              className="dp:rounded-lg dp:overflow-hidden dp:mx-0"
              alt={post.attributes.previewTitle}
              url={post.attributes.preview.data?.attributes.url}
              urlMob={
                post.attributes.preview.data?.attributes.formats.small?.url
              }
            />
          </div>
        </Offset>

        <div data-aos="fade-up">{renderContent()}</div>

        {post.attributes.author && (
          <Offset className="mt-5 dp:mt-10" offset="small">
            <div data-aos="fade-up">
              <BlogAuthor {...post.attributes.author} />
            </div>
          </Offset>
        )}

        <div data-aos="fade-up">
          <Socials items={SOCIALS} />
        </div>
      </SectionBackContainer>
      {filteredPosts.length > 0 && (
        <BlogSection
          posts={filteredPosts.slice(0, 2)}
          type="list"
          containerSmall
          title="Other materials"
          isLink
          isSliderMobile
        />
      )}
    </PageContainer>
  );
}
