import { useMemo } from "react";
import cn from "classnames";

import { VariantTypoTags } from "~/components/Typo/types";
import Typo from "~/components/Typo";

export type StepsCard = {
  title: string;
  text: string;
};

export type StepCardProps = StepsCard & {
  idx: number;
  className?: string;
  titleTag?: VariantTypoTags;
};

function StepCard({
  className,
  idx,
  text,
  title,
  titleTag = "h3",
}: StepCardProps) {
  const classes = useMemo(
    () =>
      cn(
        "w-full p-5 dp:p-10 dpb:p-20 pt-[83px] dp:pt-[90px] pb-5 dpb:pb-[64px] bg-grey rounded-lg overflow-hidden shadow-[0_30px_30px_-20px_rgba(0,0,0,0.1)]",
        className
      ),
    [className]
  );

  return (
    <div className={classes}>
      <div className="relative">
        <div
          data-aos="fade-in"
          data-aos-delay="150"
          className={cn(
            "absolute -top-[63px] left-0 font-bold text-8xl leading-[112px]",
            idx === 6 && "text-red500/30",
            idx === 5 && "text-brown500/30",
            idx === 4 && "text-pink500/30",
            idx === 3 && "text-violet500/30",
            idx === 2 && "text-blue500/30",
            idx === 1 && "text-green300/30"
          )}
        >
          0{idx}
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="20"
          data-aos-duration="1500"
          data-aos-delay="150"
          className="relative z-10 mb-2.5 dp:mb-[30px]"
        >
          <Typo tag={titleTag} fw="medium" tagStyles="title">
            {title}
          </Typo>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="20"
        data-aos-duration="1500"
        data-aos-delay="150"
      >
        <Typo className="max-w-[540px]" tag="p">
          {text}
        </Typo>
      </div>
    </div>
  );
}

export default StepCard;
