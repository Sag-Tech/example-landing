import { CUSTOMERS_SECTION } from "~/data";
import Typo from "~/components/Typo";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import LazyImage from "../LazyImage";

function CustomersSection() {
  const { leftSide, rightSide } = CUSTOMERS_SECTION;

  return (
    <SectionContainer
      isCenter
      titleAnimated
      title="Meet the changing needs of customers"
      className="overflow-hidden [&>*:nth-child(1)]:px-0 lp:[&>*:nth-child(1)]:px-5 [&_h2]:max-w-[250px] lp:[&_h2]:max-w-full pb-0
      lp:pb-20"
    >
      <div className="flex flex-col lp:flex-row w-full gap-1">
        <div
          data-aos="fade-right"
          className="relative flex justify-between lp:justify-end w-full lp:w-1/2 pl-4 lp:pl-0 pb-4 lp:pb-0 rounded-sm
          pt-5 dp:pt-10 dp:pb-10 pr-10 lp:pr-2 gap-x-[60px] customersLeftGradient dp:max-[1250px]:w-auto"
        >
          <LazyImage
            className="max-w-[172px] h-[230px] dp:h-auto"
            url="/img/phone.webp"
            alt="phone"
            imgWidth={172}
            imgHeight={328}
            objectFit="contain"
          />
          <div className="flex flex-col text-end gap-2.5">
            <h3 className="text-xl font-bold dp:text-4xl dp:leading-9 text-green300 dp:font-light">
              45%
            </h3>
            <Typo tag="p">Mobile apps</Typo>
            <span
              className="hidden dp:block relative my-2.5 w-[200px] h-[3px] rounded-sm bg-gradient-to-l from-green300/10
              to-green300 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[5px] before:h-[5px]
              before:left-0 before:bg-green300 before:rounded-full before:shadow-[0_0_10px_#19C8A2]"
            />
            <ul className="mt-[13px] dp:mt-0">
              {leftSide.map(item => (
                <li
                  key={item}
                  className="relative pr-[24px] lp:pr-[38px] after:absolute after:w-3.5 after:h-3.5 after:rounded-full
                after:bg-green300 after:top-1/2 after:-translate-y-1/2 after:right-0 lp:after:right-3 mt-2.5 first:mt-0"
                >
                  <Typo tag="p" className="text-green300">
                    {item}
                  </Typo>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="relative flex justify-end dp:justify-start w-full lp:w-1/2 rounded-sm pt-[15px] sm:pt-5 dp:pt-10
        dp:pb-10 pr-4 lp:pr-0 lp:pl-2 customersRightGradient"
        >
          <div className="absolute z-10 dp:static left-10 lp:left-2 flex flex-col gap-2.5">
            <h3 className="text-xl font-bold dp:text-4xl dp:leading-9  text-blue300 dp:font-light">
              55%
            </h3>
            <Typo tag="p">Web apps</Typo>
            <span
              className="hidden dp:block relative my-2.5 w-[300px] h-[3px] rounded-sm bg-gradient-to-r from-blue300/0
              to-blue300 after:absolute after:top-1/2 after:-translate-y-1/2 after:w-[5px] after:h-[5px] after:right-0
              after:bg-blue300 after:rounded-full after:shadow-[0_0_10px_#5395EF]"
            />
            <ul className="mt-[8px] dp:mt-0">
              {rightSide.map(item => (
                <li
                  key={item}
                  className="relative pl-[24px] lp:pl-9 before:absolute before:w-3.5 before:h-3.5 before:rounded-full
                  whitespace-nowrap before:bg-blue300 before:top-1/2 before:-translate-y-1/2 before:left-0
                  mt-2.5 first:mt-0 lp:before:left-3"
                >
                  <Typo tag="p" className="text-blue300">
                    {item}
                  </Typo>
                </li>
              ))}
            </ul>
          </div>
          <LazyImage
            className="max-w-[215px] lp:max-w-[289px] h-[264px] dp:h-auto"
            url="/img/monitor.webp"
            alt="monitor"
            imgWidth={289}
            imgHeight={328}
            objectFit="contain"
          />
        </div>
      </div>
    </SectionContainer>
  );
}

export default CustomersSection;
