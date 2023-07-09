export function hideDocumentScroll(hide: boolean) {
  if (window !== undefined) {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    const html = document.getElementsByTagName("html")[0];
    const header = document.querySelector("main header") as HTMLElement;
    const cookies = document.querySelector(".cookies-banner") as HTMLElement;

    Object.assign(html.style, {
      marginRight: hide ? `${scrollbarWidth}px` : "unset",
    });

    if (header) {
      Object.assign(header.style, {
        right: hide ? `${scrollbarWidth}px` : 0,
      });
    }

    if (cookies) {
      Object.assign(cookies.style, {
        right: hide ? `${scrollbarWidth}px` : 0,
      });
    }

    html.classList[hide ? "add" : "remove"]("scroll-fixed");
  }
}
export const getWindowScrollTop = () => {
  const doc = document.documentElement;
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
};
