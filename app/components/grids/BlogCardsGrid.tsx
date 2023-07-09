import { useMemo } from "react";
import cn from "classnames";
import type { BlogCardProps } from "~/components/cards";
import { BlogCard } from "~/components/cards";
import { getPostLink, mapPost } from "~/services/api/posts/helpers";
import { Post } from "~/services/api/posts/types";

type Props = BlogCardProps & {
  items: Array<Post>;
  className?: string;
};

const GROUP_LENGTH = 3;
const FADE_RIGHT = "fade-right";
const FADE_LEFT = "fade-left";

function BlogCardsGrid({ items = [], className }: Props) {
  const groups = useMemo(() => {
    const g = [];

    for (let i = 0; i < items.length; i += GROUP_LENGTH) {
      g.push([0, 1, 2].map(count => items[i + count]));
    }

    return g;
  }, [items]);

  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {groups.map((group, idx) => {
        const [item1, item2, item3] = group;
        const isReversed = idx % 2 !== 0;

        return (
          <div
            key={item1.id}
            className="flex flex-col dp:flex-row gap-5 h-auto"
          >
            {Boolean(item1) && (
              <div
                data-aos={isReversed ? FADE_LEFT : FADE_RIGHT}
                className={cn(
                  "w-full dp:w-1/2 h-auto",
                  isReversed ? "order-2" : "order-1"
                )}
              >
                <BlogCard
                  actionLink={getPostLink(item1.attributes.webUrl)}
                  isVertical
                  className="h-full"
                  {...mapPost(item1)}
                />
              </div>
            )}
            <div
              className={cn(
                "w-full dp:w-1/2 flex flex-col gap-5 h-auto",
                isReversed ? "order-1" : "order-2"
              )}
            >
              {Boolean(item2) && (
                <div data-aos={isReversed ? FADE_RIGHT : FADE_LEFT}>
                  <BlogCard
                    imgSmall
                    isReversed={!isReversed}
                    actionLink={getPostLink(item2.attributes.webUrl)}
                    {...mapPost(item2)}
                  />
                </div>
              )}
              {Boolean(item3) && (
                <div
                  data-aos={isReversed ? FADE_RIGHT : FADE_LEFT}
                  data-aos-delay={100}
                >
                  <BlogCard
                    imgSmall
                    isReversed={isReversed}
                    actionLink={getPostLink(item3.attributes.webUrl)}
                    {...mapPost(item3)}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BlogCardsGrid;
