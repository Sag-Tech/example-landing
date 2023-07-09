import React from "react";
import { motion } from "framer-motion";
import LazyImage from "../LazyImage";

type Props = {
  url: string;
  name: string;
};

function StackItem({ url, name }: Props) {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      layout
      className="bg-white w-20 h-[108px] rounded-lg text-center shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)]"
    >
      <div className="flex justify-center items-center w-full h-20 rounded-b-lg shadow-[0_10px_20px_-10px_rgba(0,0,0,0.1)]">
        <LazyImage
          className="w-[50px] h-[50px]"
          imgWidth="50"
          imgHeight="50"
          url={url}
          objectFit="contain"
          alt={name}
        />
      </div>
      <p className="text-xs font-light text-blue pt-1.5">{name}</p>
    </motion.div>
  );
}

export default StackItem;
