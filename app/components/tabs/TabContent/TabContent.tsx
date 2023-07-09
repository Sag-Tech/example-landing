import React from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import Typo from "~/components/Typo";

type Props = {
  text: string;
  description?: string[];
  active?: boolean;
};

function TabContent({ active, text, description }: Props) {
  return (
    <motion.div
      animate={{ opacity: 1, height: "auto" }}
      initial={{ opacity: 0, height: "24px" }}
      exit={{ opacity: 0, height: "24px" }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex flex-col gap-5 lp:gap-10",
        active === false && "hidden"
      )}
    >
      <Typo tag="p">{text}</Typo>

      {description && (
        <div className="flex flex-col sm:flex-row justify-between gap-y-5 gap-x-2">
          {description.map((item, idx) => (
            <div key={item} className="flex flex-col gap-2.5 sm:gap-5">
              <div className="flex flex-col gap-2.5">
                <h3 className="font-bold lp:font-normal text-xl lp:text-4xl lp:leading-9 text-green300">
                  {idx + 1}
                </h3>
                <span className="w-[30px] lp:w-[33px] h-[3px] bg-green300 rounded-sm" />
              </div>

              <div className="max-w-full sm:max-w-[340px]">
                <Typo tag="p">
                  <span className="font-bold">
                    {item.substring(0, item.indexOf("."))}
                  </span>
                  {item.substring(item.indexOf("."), item.length)}
                </Typo>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default TabContent;
