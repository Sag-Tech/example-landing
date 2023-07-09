import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HOW_WORK_SECTION, HOW_WORK_TABS } from "~/data";
import TabBar from "~/components/tabs/TabBar";
import TabContent from "~/components/tabs/TabContent";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import { ANCHOR_WORK } from "~/constants/paths";

function HowWorkSection() {
  const tabs = Object.values(HOW_WORK_TABS);
  const [activeCategory, setActiveCategory] = useState(
    HOW_WORK_TABS.requirements
  );
  const [currentContent, setCurrentContent] = useState(HOW_WORK_SECTION);
  const [borderColor, setBorderColor] = useState("border-green100");

  const colors = [
    "bg-green100",
    "bg-green600",
    "bg-blue100",
    "bg-blue400",
    "bg-blue600",
  ];

  const borderColors = [
    "border-green100",
    "border-green600",
    "border-blue100",
    "border-blue400",
    "border-blue600",
  ];

  useEffect(() => {
    const newContent = HOW_WORK_SECTION.filter(item =>
      item.category.includes(activeCategory)
    );
    setCurrentContent(newContent);
    setBorderColor(borderColors[tabs.indexOf(activeCategory)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  return (
    <SectionContainer
      title="How we work with our clients"
      description="We deliver what we promise"
      id={ANCHOR_WORK.slice(1)}
      isCenter
      className="overflow-hidden"
      titleAnimated
    >
      <div data-aos="fade-up" data-aos-delay="200">
        <TabBar
          tabs={tabs}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          tabType="BookmarkTab"
          colors={colors}
          borderColors={borderColors}
          styles="max-w-[1180px] mx-auto dp:-mt-5 dpb:mt-0"
        />

        <motion.div
          className={`hidden lp:flex border ${borderColor} p-10 rounded-lg max-w-[1180px] mx-auto`}
        >
          <AnimatePresence initial={false} mode="wait">
            {currentContent.map(({ text, description, category }) => (
              <TabContent
                active={activeCategory === category}
                key={category}
                text={text}
                description={description}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

export default HowWorkSection;
