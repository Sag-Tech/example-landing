type ContentCommonCardProps = {
  title?: string;
  text?: string;
  bgColor?: "white";
  noOffset?: boolean;
  className?: string;
  actionLink?: string;
};

type CardsImageProps = {
  url?: string;
  url2x?: string;
  alt?: string;
};

export type CommonCardProps = ContentCommonCardProps & CardsImageProps;
