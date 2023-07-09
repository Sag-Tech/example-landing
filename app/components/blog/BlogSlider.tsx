import { useLocation } from "@remix-run/react";
import Slider from "~/components/base/slider";
import { CaseCard } from "~/components/cards";
import { getPostLink, mapPost } from "~/services/api/posts/helpers";
import { Post } from "~/services/api/posts/types";
import LinkRoute from "../LinkRoute";

type Props = {
  posts: Array<Post>;
  className?: string;
};

export default function BlogSlider({ className, posts }: Props) {
  const location = useLocation();

  const renderCard = (post: Post) => {
    const mappedPost = mapPost(post);
    const actionLink = getPostLink(mappedPost.webUrl);

    return (
      <CaseCard
        imgWidth="700"
        imgHeight="375"
        actionLink={actionLink}
        isFullHeight
        {...mappedPost}
      >
        <LinkRoute
          ariaLabel={mappedPost.title}
          to={actionLink}
          state={{ from: location }}
          size="small"
          asButton
          className="overflow-hidden"
        >
          <span className="opacity-0 pointer-events-none absolute -top-96">
            {mappedPost.title}
          </span>
          read more
        </LinkRoute>
      </CaseCard>
    );
  };

  return (
    <Slider<Post> className={className} renderCard={renderCard} items={posts} />
  );
}
