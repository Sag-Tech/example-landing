import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import StackItem from "~/components/StackItem";
import { Stack } from "~/services/api/types";

type Props = {
  items: Array<Stack> | [];
  center?: boolean;
};

function StacksGrid({ center, items = [] }: Props) {
  return (
    <motion.div
      layout
      className={cn(
        "flex items-center flex-wrap gap-[5px] dp:gap-5",
        center && "justify-center"
      )}
    >
      <AnimatePresence initial={false}>
        {items.map(({ imageURL, name, id }) => (
          <StackItem url={imageURL} name={name} key={id} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default StacksGrid;
