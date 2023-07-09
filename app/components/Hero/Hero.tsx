import { useContext } from "react";
import ArrowDown from "~/components/icons/ArrowDown/ArrowDown";
import { ModalContext } from "~/root";
import Typo from "../Typo";
import Button from "../Button";

function Hero() {
  const { openModal } = useContext(ModalContext);

  return (
    <div
      className="relative flex justify-center items-center h-screen min-h-[523px]
      lp:min-h-[650px] dpb:min-h-[800px] w-full bg-gradient-to-l from-[rgba(49, 98, 172, 0.6)] to-[rgba(48, 198, 157, 0.6)]"
    >
      <div className="absolute left-0 top-0 w-full h-full">
        <picture>
          <source srcSet="/img/hero-bg.webp" media="(min-width: 600px)" />
          <img
            width=""
            height=""
            className="w-full h-full object-cover"
            src="/img/hero-bg-mob.webp"
            alt="bg"
          />
        </picture>
      </div>
      <div
        className="relative z-10 flex flex-col items-center gap-5 dp:gap-10 text-white text-center max-w-[290px] sm:max-w-full
         dp:-mt-12 dpb:-mt-14"
      >
        <div data-aos="fade-down" data-aos-offset="20">
          <Typo fw="light" tag="h1">
            Digital Wellness by Nyoka
          </Typo>
        </div>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-offset="30">
          <Typo
            tag="h2"
            tagStyles="h4"
            className="text-sm leading-5 sm:text-2xl dpb:text-4xl font-light mb-5 lp:mb-0 dpb:mb-5 dp:leading-[44px]"
          >
            Build web and mobile apps that users love
          </Typo>
        </div>
        <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="20">
          <Button onClick={() => openModal("action")}>
            <span className="text-sm uppercase font-medium leading-6">
              Get in touch
            </span>
          </Button>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-offset="20"
        className="absolute flex flex-col items-center pt-[11px] gap-[5px] bottom-[62px] dp:bottom-[16%]
        dpb:bottom-[11%] w-[27px] h-[45px] border-0 dp:!border border-green rounded-3xl"
      >
        <div className="relative hidden dp:inline-block w-[3px] h-[5px] bg-green rounded-3xl top-0" />
        <ArrowDown styles="fill-white dp:fill-[#5594F1] w-[7px] h-[7px] animate-[scroll_2s_infinite] ease-out" />
      </div>
    </div>
  );
}

export default Hero;
