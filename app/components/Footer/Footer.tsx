import cn from "classnames";
import { useContext } from "react";
import Typo from "~/components/Typo/Typo";
import Button from "~/components/Button";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import Socials from "~/components//Socials";
import { SOCIALS } from "~/data/socials";
import { ANCHOR_CONTACT, PAGE_PRIVACY_POLICY } from "~/constants/paths";
import { ModalContext } from "~/root";
import LazyImage from "../LazyImage";

const linkClasses =
  "relative block hover:after:opacity-100 after:w-full after:inline-block after:left-0 after:opacity-0 after:absolute after:bottom-0.5 after:h-px after:bg-dark after:transition-all after:duration-500";

type Props = {
  innerPage?: boolean;
};

function Footer({ innerPage }: Props) {
  const { openModal } = useContext(ModalContext);

  return (
    <footer className="mt-auto bg-gradient-to-r from-[#00a983]/20 to-[#3162ac]/20">
      <SectionContainer
        id={ANCHOR_CONTACT.slice(1)}
        title={innerPage ? undefined : "Contact us"}
        titleAnimated
        className="overflow-hidden"
      >
        <div className="flex flex-col items-center gap-5 lp:gap-10 max-w-[555px] mx-auto">
          {!innerPage && (
            <div className="flex flex-col justify-center items-center gap-5 lp:gap-10">
              <div data-aos="fade-up" data-aos-offset="50">
                <LazyImage
                  className="max-w-[157px] lp:max-w-[259px] w-full dpb:mt-5"
                  url="/svg/logo-footer.svg"
                  alt="logo"
                  imgWidth="259"
                  imgHeight="148"
                />
              </div>
              <div data-aos="fade-up" data-aos-offset="50">
                <Typo tag="p" className="text-center">
                  We deliver most of our solutions from 4 months depending on
                  its complexity. You are 4 months away from the deployment,
                  just contact us.
                </Typo>
              </div>
            </div>
          )}

          <div data-aos="fade-up" data-aos-offset="50">
            <Typo tag="p" className="max-w-xs text-center">
              Headquarter: Almaty, Kazakhstan <br /> Representatives: Raleigh,
              NC, USA
            </Typo>
          </div>
          <div data-aos="fade-up" data-aos-offset="50">
            <Button onClick={() => openModal("action")}>Get in touch</Button>
          </div>

          <div className="flex flex-col items-center gap-2.5">
            <a
              data-aos="fade-up"
              data-aos-offset="50"
              href="tel:19292351776"
              className={linkClasses}
            >
              +1 (929) 235-1776
            </a>
            <a
              data-aos="fade-up"
              data-aos-offset="50"
              href="mailto:info@nyoka.io"
              className={linkClasses}
            >
              info@nyoka.io
            </a>
            <div data-aos="fade-up" data-aos-offset="50">
              <Socials className="mt-2.5" items={SOCIALS} />
            </div>
          </div>

          <div className="flex items-center flex-col gap-5">
            <div data-aos="fade-up" data-aos-offset="50">
              <LazyImage
                imgWidth="150"
                imgHeight="40"
                className="w-[150px] mt-5 lp:mt-0"
                url="/svg/astana-hub.svg"
                alt="astana hub"
              />
            </div>
            <div className="flex flex-col gap-5 text-center">
              <a
                data-aos="fade-up"
                data-aos-offset="50"
                className={cn(linkClasses, "self-center")}
                href={PAGE_PRIVACY_POLICY}
              >
                Privacy Policy
              </a>
              <div data-aos="fade-up" data-aos-offset="50">
                <Typo
                  color="blue"
                  tag="p"
                  tagStyles="h6"
                  className="text-sm leading-5"
                >
                  © 2023 Nyoka. All rights reserved.
                </Typo>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}

export default Footer;
