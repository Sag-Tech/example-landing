import { useLocation } from "@remix-run/react";
import cn from "classnames";
import { useCallback, useEffect, useState } from "react";
import {
  Header,
  HeaderPhone,
  HeaderLogo,
  HeaderNavbar,
  HeaderMenuButton,
  HeaderMenu,
} from "~/components//Header";

type Props = {
  innerPage?: boolean;
};

export default function HeaderTransparent({ innerPage }: Props) {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const scrollListener = useCallback(() => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [setScrolled]);

  useEffect(() => {
    scrollListener();
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [scrollListener]);

  const isInnerPage = pathname !== "/";

  const [open, setOpen] = useState(false);

  const handleCloseMenu = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <>
      <Header
        position="fixed"
        defaultStyle={scrolled ? "white" : "transparent"}
        isShadow={scrolled}
        isScrolled={scrolled}
      >
        <div
          className={cn(
            "relative flex items-center justify-between dp:mb-5 dp:justify-center transition-all duration-300",
            scrolled ? "" : "dpb:mb-10"
          )}
        >
          <HeaderLogo isScrolled={scrolled} isMono={!scrolled} />
          <div className="hidden dp:block dp:absolute dp:-translate-y-1/2 dp:top-1/2 dp:right-0">
            <HeaderPhone isScrolled={scrolled} isBlur={!scrolled} />
          </div>
          <HeaderMenuButton
            isBlur={!scrolled}
            isOpen={open}
            onToggle={setOpen}
          />
        </div>
        <div className="hidden dp:block">
          <HeaderNavbar innerPage={innerPage} isTransparent={!scrolled} />
        </div>
      </Header>
      <HeaderMenu
        innerPage={isInnerPage}
        closeMenu={handleCloseMenu}
        isBlur={!scrolled}
        isOpen={open}
      />
    </>
  );
}
