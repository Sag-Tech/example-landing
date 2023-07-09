/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useNavigate } from "@remix-run/react";
import cn from "classnames";
import type { MouseEvent } from "react";
import { useCallback, useMemo } from "react";
import { NAVBAR_LINKS } from "~/data/navigation";
import Typo from "~/components/Typo";
import { HeaderPhone } from "~/components/Header";
import { SOCIALS } from "~/data/socials";
import { scrollToAnchor } from "~/helpers/location";
import Socials from "../Socials";

type Props = {
  isOpen: boolean;
  isBlur?: boolean;
  innerPage?: boolean;
  closeMenu: () => void;
};

function HeaderMenu({ closeMenu, innerPage, isOpen, isBlur = false }: Props) {
  const navigate = useNavigate();
  const linkClasses = useMemo(() => {
    return cn("hover:text-green transition-colors duration-300", {
      "text-white": isBlur,
      "text-blue": !isBlur,
    });
  }, [isBlur]);

  const handleLinkClick = useCallback(
    ({
      e,
      href,
      innerHref,
      innerAnchor,
    }: {
      e: MouseEvent<HTMLAnchorElement>;
      href: string;
      innerHref?: string;
      innerAnchor?: boolean;
    }) => {
      closeMenu();

      if (innerPage && !innerAnchor) {
        navigate(innerHref || href);
      } else {
        e.preventDefault();
        const hash = href.slice(2);
        scrollToAnchor(hash);
      }
    },
    [closeMenu, innerPage, navigate]
  );

  return (
    <nav
      className={cn(
        "fixed dp:hidden justify-between h-full top-0 z-[99]",
        "left-0 right-0 overflow-y-auto transition-all duration-500",
        { "invisible opacity-0 pointer-events-none": !isOpen },
        { "bg-white ": !isBlur }
      )}
      style={{
        background: isBlur
          ? `rgba(255, 255, 255, 0.4) url(/img/header-menu-bg.webp) no-repeat center/cover`
          : undefined,
      }}
    >
      <div className="flex flex-col px-5 pt-[104px] pb-10 backdrop-blur-[35px] h-full">
        <ul className="flex flex-col items-center gap-[26px]">
          {NAVBAR_LINKS.map(({ value, href, innerHref, innerAnchor }) => (
            <li key={value}>
              <Link
                onClick={e =>
                  handleLinkClick({ e, href, innerHref, innerAnchor })
                }
                className={linkClasses}
                to={innerPage ? innerHref || href : href}
              >
                <Typo
                  fw="medium"
                  isUppercase
                  color="current"
                  tag="h3"
                  tagStyles="p"
                >
                  {value}
                </Typo>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col items-center text-base">
          <HeaderPhone isBlur={isBlur} className="mb-[10px]" />
          <a className={`mb-5 ${linkClasses}`} href="mailto:info@nyoka.io">
            info@nyoka.io
          </a>
          <Socials items={SOCIALS} defaultStyle={isBlur ? "white" : "blue"} />
        </div>
      </div>
    </nav>
  );
}

export default HeaderMenu;
