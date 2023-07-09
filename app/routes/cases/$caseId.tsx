import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";

import Container from "~/components/Container";
import Divider from "~/components/Divider";
import StacksGrid from "~/components/grids/StacksGrid";
import Image from "~/components/Image";
import PageContainer from "~/components/layout/PageContainer";
import SectionBackContainer from "~/components/layout/Section/SectionBackContainer";
import SectionBlockText from "~/components/layout/Section/SectionBlockText";
import SectionContainer from "~/components/layout/Section/SectionContainer";
import SectionSubtitle from "~/components/layout/Section/SectionSubtitle";
import LazyImage from "~/components/LazyImage";
import Offset from "~/components/Offset";
import ProjectsSection from "~/components/ProjectsSection";
import SectionForm from "~/components/SectionForm";
import Typo from "~/components/Typo";
import { PAGE_404, PAGE_CASE } from "~/constants/paths";
import apiProject from "~/services/api/projects";
import { getCaseCategoriesTitle } from "~/services/api/projects/helpers";
import { Project } from "~/services/api/projects/types";
import { mapTechnologyToStack } from "~/services/api/technologies/helpers";
import { Technology } from "~/services/api/technologies/types";
import { Stack } from "~/services/api/types";

type LoaderData = {
  project: Project;
  projects: Array<Project>;
};

export const loader: LoaderFunction = async props => {
  const { params } = props;
  const webUrl = params.caseId;

  return Promise.all([
    apiProject.getProject(String(webUrl)),
    apiProject.getProjects({ populate: "deep", sort: "date:desc" }),
  ])
    .then(res => {
      return {
        project:
          res[0] && res[0].data && res[0].data.length === 1
            ? res[0].data[0]
            : null,
        projects: res[1].data.filter(p => p.id !== params.caseId),
      } as LoaderData;
    })
    .catch(() => {
      return redirect(PAGE_404);
    });
};

export const meta: MetaFunction = ({ data, location }) => {
  const title = `${data.project.attributes.title} – Nyoka`;
  const description = data.project.attributes.seo.metaDescription;
  const { width, height, url } =
    data.project.attributes.seo.metaImage.data.attributes;
  const pageUrl = `https://nyoka.io${location.pathname}`;

  return {
    title,
    description,
    keywords: data.project.attributes.seo.keywords,
    "og:title": title,
    "og:url": pageUrl,
    "og:image": url,
    "og:image:width": String(width),
    "og:image:height": String(height),
    "og:description": description,
    "twitter:title": title,
    "twitter:url": pageUrl,
    "twitter:description": description,
    "twitter:image": url,
  };
};

export default function CaseId() {
  const data = useLoaderData();
  const { project, projects } = data as LoaderData;

  const filteredProject = useMemo(() => {
    if (project && projects) {
      return projects.filter(p => p.id !== project.id);
    }

    return [];
  }, [projects, project]);

  const mappedTechnologies = useMemo(() => {
    if (
      project &&
      project.attributes.technologies &&
      project.attributes.technologies.data
    ) {
      return project.attributes.technologies.data.map(
        (technology: Technology) => mapTechnologyToStack(technology)
      );
    }

    return [];
  }, [project]);

  return (
    <PageContainer>
      <SectionBackContainer
        sectionOffsetSmall
        subtitle={getCaseCategoriesTitle(project.attributes.categories.data)}
        backPath={PAGE_CASE}
      >
        <div data-aos="fade-up">
          <Typo className="mb-2.5 dp:mb-5" fw="medium" tag="h2">
            {project.attributes.title}
          </Typo>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <Typo tag="p">{project.attributes.client}</Typo>
        </div>
      </SectionBackContainer>
      <Container noOffset maxWidthFull>
        <div data-aos="fade-up" className="relative">
          <Image
            objectFit="cover"
            imgWidth={project.attributes.previewLong.data?.attributes.width}
            imgHeight={project.attributes.previewLong.data?.attributes.height}
            className="h-[191px] dp:h-auto"
            alt={project.attributes.title}
            url={project.attributes.previewLong.data?.attributes.url}
            urlMob={
              project.attributes.previewLong.data?.attributes.formats.small?.url
            }
          />
        </div>
      </Container>
      <div>
        <div
          data-aos="fade-up"
          className="relative -mt-[59px] dp:-mt-[103px] max-dp:px-5 dp:left-0 dp:right-0 text-center"
        >
          <div className="z-20 inline-block w-full bg-white rounded-t-[20px] dp:rounded-t-[40px] p-5 py-5 dp:py-10 dp:max-w-[880px] dpb:max-w-[940px]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <Divider size="small" />
            </div>
            <Typo tagStyles="pbig" isGradient>
              {project.attributes.slogan}
            </Typo>
          </div>
        </div>
        <SectionContainer
          sectionOffsetSmall
          className="!pb-5 dp:!pb-10"
          containerSmallWidth
        >
          <SectionBlockText
            title="Description"
            text={project.attributes.description}
          />
        </SectionContainer>
      </div>
      <div data-aos="fade-up">
        <Container noOffset maxWidthFull>
          <LazyImage
            imgWidth={
              project.attributes.banner.data?.attributes.formats.large?.width
            }
            imgHeight={
              project.attributes.banner.data?.attributes.formats.large?.height
            }
            alt="banner"
            url={project.attributes.banner.data?.attributes.url}
            urlMob={
              project.attributes.banner.data?.attributes.formats.small?.url
            }
          />
        </Container>
      </div>
      <SectionContainer sectionOffsetSmall containerSmallWidth>
        <Offset>
          <SectionBlockText title="Results" text={project.attributes.results} />
        </Offset>
        <Offset>
          <SectionBlockText title="Team" text={project.attributes.team} />
        </Offset>
        <SectionBlockText
          title="Project life"
          text={project.attributes.projectLife}
        />
      </SectionContainer>
      <SectionContainer sectionOffsetSmall containerSmallWidth bgColor="grey">
        <Offset offset="small">
          <div data-aos="fade-up">
            <SectionSubtitle title="Used technologies" />
          </div>
        </Offset>
        <div data-aos="fade-up" data-aos-delay="100">
          <StacksGrid items={mappedTechnologies as Array<Stack>} />
        </div>
      </SectionContainer>
      <SectionForm id="case-form" title="Start a project" />
      {filteredProject.length > 0 && (
        <div>
          <ProjectsSection
            animated
            projects={filteredProject}
            noAction
            title="Other projects"
          />
        </div>
      )}
    </PageContainer>
  );
}
