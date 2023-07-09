import { useCallback, useMemo, useState } from "react";
import { useLoaderData } from "@remix-run/react";
import CaseCardComponent from "~/components/cards/CaseCard";
import CardsListGrid from "~/components/grids/CardsListGrid";
import PageContainer from "~/components/layout/PageContainer";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import Offset from "~/components/Offset";
import Tabs from "~/components/base/tabs";
import apiProject from "~/services/api/projects";
import { Project } from "~/services/api/projects/types";
import { getProjectLink, mapProject } from "~/services/api/projects/helpers";
import { mapProjectCategories } from "~/services/api/projectCategories/helpers";
import apiProjectFilters from "~/services/api/projectFilters";
import { ProjectCategory } from "~/services/api/projectCategories/types";
import { DEFAULT_PAGINATION } from "~/services/api/types";
import ListLoader from "~/components/ListLoader";

const ALL_TAB_ID = "all";
const OTHER_TAB_ID = "other";
const ALL_TAB_ITEM = { id: ALL_TAB_ID, title: "All projects" };
const OTHER_TAB_ITEM = { id: OTHER_TAB_ID, title: "Other" };

export const loader = async () => {
  return Promise.all([
    apiProject.getProjects({
      populate: "deep",
      ...DEFAULT_PAGINATION,
      "pagination[pageSize]": 6, // TODO remove after tests
    }),
    apiProjectFilters.getProjectFilters({
      populate: "deep,2",
    }),
  ])
    .then(res => ({
      projects: res[0].data,
      projectsPagination: res[0].meta.pagination,
      projectCategoriesFilters: res[1].data.attributes.filters.data,
    }))
    .catch(() => ({
      projects: [],
      projectsPagination: null,
      projectCategoriesFilters: [],
    }));
};

const renderCard = (project: Project) => {
  return (
    <div className="block h-full">
      <CaseCardComponent
        isFullHeight
        actionLink={getProjectLink(project.attributes.webUrl)}
        {...mapProject(project)}
      />
    </div>
  );
};

export default function CasesPage() {
  const { projects, projectsPagination, projectCategoriesFilters } =
    useLoaderData();
  const [activeTab, setActiveTab] = useState<string>(ALL_TAB_ID);

  const tabs = useMemo(() => {
    if (Array.isArray(projectCategoriesFilters)) {
      return [
        ALL_TAB_ITEM,
        ...projectCategoriesFilters.map((category: ProjectCategory) =>
          mapProjectCategories(category)
        ),
        OTHER_TAB_ITEM,
      ];
    }

    return [];
  }, [projectCategoriesFilters]);

  const filterProjects = useCallback(
    (items: Array<Project>) => {
      if (activeTab === ALL_TAB_ID) {
        return items;
      }

      if (activeTab === OTHER_TAB_ID) {
        return items.filter((project: Project) =>
          project.attributes.categories.data.some(
            category => category.id !== activeTab
          )
        );
      }

      return items.filter((project: Project) =>
        project.attributes.categories.data.some(
          category => category.id === activeTab
        )
      );
    },
    [activeTab]
  );

  const handleToggleTab = useCallback(
    (id: string) => {
      setActiveTab(id);
    },
    [setActiveTab]
  );

  return (
    <PageContainer>
      <SectionContainer
        titleAnimated
        className="overflow-hidden"
        bgColor="grey"
        title="Case studies"
      >
        <Offset offset="small" className="flex justify-center">
          <div data-aos="fade-up" data-aos-delay="100" className="w-full">
            <Tabs
              isScrollable
              tabs={tabs}
              activeTab={activeTab}
              onToggleTab={handleToggleTab}
            />
          </div>
        </Offset>

        <ListLoader<Project>
          defaultItems={projects}
          onFetch={apiProject.getProjects}
          defaultPagination={projectsPagination}
        >
          {({ items }) => (
            <CardsListGrid<Project>
              items={filterProjects(items)}
              renderCard={renderCard}
            />
          )}
        </ListLoader>
      </SectionContainer>
    </PageContainer>
  );
}
