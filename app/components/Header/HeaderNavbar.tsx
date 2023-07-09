/* eslint-disable jsx-a11y/anchor-is-valid */
import cn from "classnames";
import { Link, useNavigate } from "@remix-run/react";
import Typo from "~/components/Typo";
import { NAVBAR_LINKS } from "~/data/navigation";
import { scrollToAnchor } from "~/helpers/location";

type Props = {
  className?: string;
  isTransparent?: boolean;
  innerPage?: boolean;
};

function HeaderNavbar({ innerPage, className, isTransparent }: Props) {
  const navigate = useNavigate();

  return (
    <nav className={cn("px-2", className)}>
      <ul className="flex justify-center gap-10">
        {NAVBAR_LINKS.map(({ value, href, innerHref, innerAnchor }) => (
          <li key={value}>
            <Link
              to={innerPage ? innerHref || href : href}
              onClick={e => {
                if (innerPage && !innerAnchor) {
                  navigate(innerHref || href);
                } else {
                  e.preventDefault();
                  const hash = href.slice(2);

                  scrollToAnchor(hash);
                }
              }}
              className={cn([
                "hover:text-green transition-colors duration-300",
                `text-${isTransparent ? "white" : "blue"}`,
              ])}
            >
              <Typo color="current" isUppercase tag="h5" fw="medium">
                {value}
              </Typo>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNavbar;
