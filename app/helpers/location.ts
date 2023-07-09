type GetFromPathProps = {
  pathname: string;
  search: string;
};

export function getFromPath({ pathname, search }: GetFromPathProps): string {
  return `${pathname}${search}`;
}

export const scrollToAnchor = (locationHash: string) => {
  const scrollToContainer = document.getElementById(locationHash);

  if (scrollToContainer) {
    scrollToContainer.scrollIntoView({
      behavior: "smooth",
    });
  }
};
