import cn from "classnames";
import {
  LegacyRef,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { VariantTypoColors } from "../Typo/types";

export type ImageProps = {
  url?: string;
  urlMob?: string;
  url2x?: string;
  height?: string;
  width?: string;
  alt?: string;
  className?: string;
  isShadow?: boolean;
  maxWidthOn?: boolean;
  rounded?: "lg" | "xl";
  objectFit?: "cover" | "contain" | "fill";
  imgHeight?: string | number;
  imgWidth?: string | number;
  bgColor?: VariantTypoColors | "blue/60";
  placeholderImg?: string;
  containerRef?: LegacyRef<HTMLDivElement>;
  objectPosition?:
    | "top"
    | "left"
    | "center"
    | "right"
    | "bottom"
    | "bottom-center";
};

function Image({
  url,
  urlMob,
  url2x,
  alt,
  height,
  width,
  className,
  objectFit,
  isShadow = false,
  imgHeight,
  imgWidth,
  rounded,
  maxWidthOn,
  bgColor,
  placeholderImg,
  containerRef = null,
  objectPosition,
}: ImageProps) {
  const [imgSrc, setSrc] = useState<string | undefined>();
  const [imgMobSrc, setMobSrc] = useState<string | undefined>();
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (url && url !== imgSrc) {
      setSrc(url);
    }

    if (urlMob && urlMob !== imgMobSrc) {
      setMobSrc(urlMob);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const onLoad = useCallback(() => {
    setError(false);
    setLoading(false);
  }, [setLoading]);

  const onError = useCallback(() => {
    setLoading(false);

    if (url) {
      setError(true);
    }

    if (placeholderImg) {
      setSrc(placeholderImg);
      setMobSrc(placeholderImg);
    }
  }, [placeholderImg, setLoading, setSrc, url]);

  const isLoadingState = useMemo(
    () => !imgSrc || isLoading || (isError && !placeholderImg),
    [imgSrc, isLoading, isError, placeholderImg]
  );

  const containerClasses = useMemo(
    () =>
      cn(
        "relative overflow-hidden",
        isShadow && "shadow-[0_20px_20px_-10px_rgba(0,0,0,0.1)]",
        height && `h-[${height}]`,
        width && `w-[${width}]`,
        bgColor && `bg-${bgColor}`,
        isLoadingState && "opacity-[0.3]",
        className
      ),
    [height, width, className, isShadow, bgColor, isLoadingState]
  );

  const imgClasses = useMemo(
    () =>
      cn(
        maxWidthOn ? "max-w-full" : "max-w-none w-full",
        objectFit && "w-full h-full",
        objectFit === "cover" && "object-cover",
        objectFit === "contain" && "object-contain",
        objectPosition === "bottom" && `object-bottom`,
        rounded && `rounded-${rounded}`
      ),
    [objectFit, maxWidthOn, rounded, objectPosition]
  );

  const srcSet = imgSrc && url2x ? `${imgSrc}, ${url2x} 2x` : undefined;

  return (
    <div ref={containerRef || null} className={containerClasses}>
      {isLoadingState && (
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-[#ebe9f0] rounded" />
      )}

      <picture className="w-full h-full">
        {urlMob && <source srcSet={imgSrc} media="(min-width: 1100px)" />}
        <img
          width={imgWidth}
          height={imgHeight}
          className={imgClasses}
          src={imgMobSrc || imgSrc}
          srcSet={srcSet}
          alt={!isLoading && imgSrc ? alt : ""}
          onError={onError}
          onLoad={onLoad}
        />
      </picture>
    </div>
  );
}

const ForwardedImage = forwardRef(
  (props: ImageProps, ref: LegacyRef<HTMLDivElement>) => {
    return <Image containerRef={ref} {...props} />;
  }
);

export { ForwardedImage };
export default Image;
