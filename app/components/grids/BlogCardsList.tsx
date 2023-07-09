import cn from "classnames";
import type { BlogCardProps } from "~/components/cards";
import { BlogCard } from "~/components/cards";
import { getPostLink, mapPost } from "~/services/api/posts/helpers";
import { Post } from "~/services/api/posts/types";

type Props = BlogCardProps & {
  items: Array<Post>;
  className?: string;
};

function BlogCardsList({ items = [], className }: Props) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {items.map((item, idx) => {
        const isReversed = idx % 2 === 0;

        return (
          <div
            data-aos="fade-up"
            data-aos-delay={100 * idx}
            key={item.id}
            className="flex flex-col dp:flex-row gap-5"
          >
            <BlogCard
              isReversed={isReversed}
              actionLink={getPostLink(item.attributes.webUrl)}
              {...mapPost(item)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default BlogCardsList;
