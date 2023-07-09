import { ReactNode, useEffect, useState } from "react";
import Loader from "../Loader";
import useIntersectionObserver from "~/hooks/useIntersectionObserver";
import {
  DEFAULT_PAGINATION,
  Pagination,
  RequestParams,
  ResponseDefault,
} from "~/services/api/types";

type ChildrenProps<T> = {
  isFetching: boolean;
  items: Array<T>;
};

type Props<T> = {
  onFetch: (params: RequestParams) => Promise<ResponseDefault<Array<T>>>;
  defaultPagination: Pagination;
  defaultItems: Array<T | never>;
  children: (props: ChildrenProps<T>) => ReactNode;
};

function ListLoader<T>({
  defaultPagination,
  defaultItems = [],
  children,
  onFetch,
}: Props<T>) {
  const [items, setItems] = useState<Array<T | never>>(defaultItems);
  const [isError, setError] = useState<boolean>(false);
  const [isFetching, setFetching] = useState<boolean>(false);
  const [pagination, setPagination] = useState<Pagination>(defaultPagination);
  const [containerRef, isVisible] = useIntersectionObserver({
    rootMargin: "150%",
    threshold: 0.1,
  });

  useEffect(() => {
    if (isVisible && !isError) {
      setFetching(true);

      onFetch({
        ...DEFAULT_PAGINATION,
        "pagination[pageSize]": 6, // TODO remove after tests
        populate: "deep",
        "pagination[page]": pagination.page + 1,
      })
        .then(({ meta, data }) => {
          setPagination(meta.pagination);
          setItems([...items, ...data]);
          setFetching(false);
        })
        .catch(() => {
          setError(true);
          setFetching(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div>
      {children ? children({ isFetching, items }) : null}
      {isFetching && (
        <div className="flex justify-center items-center p-4 h-20">
          <Loader color="dark" />
        </div>
      )}
      {pagination.page < pagination.pageCount && (
        <div ref={containerRef} className={isFetching ? "hidden" : ""} />
      )}
    </div>
  );
}

export default ListLoader;
