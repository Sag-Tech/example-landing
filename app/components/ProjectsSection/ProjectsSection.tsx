import { useCallback, useMemo } from "react";
import CaseCardComponent from "~/components/cards/CaseCard";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import type { SectionBgColor } from "~/components/layout/Section/types";
import { ANCHOR_CASE, PAGE_CASE } from "~/constants/paths";
import SectionLink from "../layout/Section/SectionLink";
import Slider from "../base/slider";
import { Project, ProjectCard } from "~/services/api/projects/types";
import { getProjectLink, mapProject } from "~/services/api/projects/helpers";

type Props = {
  title?: string;
  noAction?: boolean;
  bgColor?: SectionBgColor;
  filterCaseId?: string;
  projects?: Array<Project>;
  animated?: boolean;
};

function ProjectsSection({
  filterCaseId,
  bgColor = "grey",
  title,
  noAction = false,
  projects,
  animated,
}: Props) {
  const getAnimationAttr = useCallback(
    (idx: number) =>
      animated
        ? {
            "data-aos": "fade-up",
            "data-aos-delay": idx * 150,
          }
        : {},
    [animated]
  );

  const renderCard = (project: ProjectCard, idx: number) => {
    return (
      <div className="h-full" {...getAnimationAttr(idx)}>
        <CaseCardComponent
          isFullHeight
          actionLink={getProjectLink(project.webUrl)}
          {...project}
        />
      </div>
    );
  };

  const mappedProjects = useMemo(() => {
    if (Array.isArray(projects)) {
      const mp = projects.map(p => mapProject(p));

      if (filterCaseId) {
        return mp.filter(p => p.id !== filterCaseId);
      }

      return mp;
    }

    return [];
  }, [projects, filterCaseId]);

  return (
    <SectionContainer
      id={ANCHOR_CASE.slice(1)}
      bgColor={bgColor}
      title={title}
      maxWidthFull
      isCenter
      className="-mt-2.5 lp:mt-0 overflow-hidden"
      titleAnimated={animated}
    >
      <Slider<ProjectCard>
        renderCard={renderCard}
        items={mappedProjects}
        className="[&_button]:-mt-16"
      />
      {!noAction && (
        <SectionLink offsetOff to={PAGE_CASE} asButton title="All projects" />
      )}
    </SectionContainer>
  );
}

export default ProjectsSection;
