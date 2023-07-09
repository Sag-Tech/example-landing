/* eslint-disable no-undef */
import { MutableRefObject, useState, useRef, useEffect } from "react";

type UseIntersectionObserver = (
  options: IntersectionObserverInit | undefined
) => [MutableRefObject<HTMLDivElement | null>, boolean];

const useIntersectionObserver: UseIntersectionObserver = options => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;

    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const ref = containerRef?.current;

    if (containerRef.current) observer.observe(containerRef?.current);

    return () => {
      if (ref) observer.unobserve(ref);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);

  return [containerRef, isVisible];
};

export default useIntersectionObserver;
