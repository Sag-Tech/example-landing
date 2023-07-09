import cn from "classnames";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Container from "~/components/Container";
import { getWindowScrollTop } from "~/helpers/document";

type Props = PropsWithChildren<{
  position?: "sticky" | "relative" | "absolute" | "fixed";
  defaultStyle?: "transparent" | "white";
  isShadow?: boolean;
  isScrolled?: boolean;
  isOffsetInner?: boolean;
}>;

function Header({
  children,
  position = "absolute",
  defaultStyle = "white",
  isShadow = false,
  isScrolled = false,
  isOffsetInner = false,
}: Props) {
  const [show, setShow] = useState(true);
  const lastScrollTop = useRef(0);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const isResponsive =
      position === "absolute" || position === "fixed" || position === "sticky";

    const onScroll = () => {
      const viewportHeight = window.innerHeight * 0.7;
      const scrollTop = getWindowScrollTop();

      if (
        (scrollTop - lastScrollTop.current <= 0 &&
          scrollTop > viewportHeight) ||
        scrollTop <= viewportHeight
      ) {
        setShow(true);
      } else {
        setShow(false);
      }

      lastScrollTop.current = scrollTop;
    };

    if (isResponsive) {
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      if (isResponsive) {
        window.removeEventListener("scroll", onScroll);
      }
    };
  }, [position]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "w-full min-h-[64px] dp:py-5 py-[14px] z-[100] transition-header",
        !isScrolled && "dpb:py-10",
        isOffsetInner && " dpb:!pt-[30px]",
        show ? "translate-y-0" : "-translate-y-full",
        {
          "shadow-[0_30px_30px_-20px_rgba(0,0,0,0.05)]": isShadow,
          "top-0 left-0 right-0 !w-auto":
            position === "fixed" ||
            position === "absolute" ||
            position === "sticky",
          "text-white z-20 bg-white/5 dp:bg-transparent backdrop-blur-[17.5px] dp:backdrop-blur-none border-b-[0.2px] border-white/40 dp:border-none":
            defaultStyle === "transparent",
          "text-blue bg-white": defaultStyle === "white",
        },
        position
      )}
    >
      <Container>{children}</Container>
    </header>
  );
}

export default Header;
