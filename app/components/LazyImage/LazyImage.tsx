import { useState, useEffect } from "react";
import { ForwardedImage, ImageProps } from "app/components/Image";
import useIntersectionObserver from "app/hooks/useIntersectionObserver";

type Props = ImageProps;

export function LazyImage({ url, urlMob, ...props }: Props) {
  const [imageSrc, setImageSrc] = useState<string | undefined>();
  const [imageMobSrc, setImageMobSrc] = useState<string | undefined>();
  const [containerRef, isVisible] = useIntersectionObserver({
    rootMargin: "70%",
    threshold: 0.2,
  });

  useEffect(() => {
    if (isVisible) {
      setImageSrc(url);
      setImageMobSrc(urlMob);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <ForwardedImage
      url={imageSrc}
      urlMob={imageMobSrc}
      ref={containerRef}
      {...props}
    />
  );
}

export default LazyImage;
