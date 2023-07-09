import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import Container from "~/components/Container";
import IconsSection from "~/components/IconsSection";

import PageContainer from "~/components/layout/PageContainer";
import ProjectsSection from "~/components/ProjectsSection";
import SectionForm from "~/components/SectionForm";
import StackSectionSimple from "~/components/StackSectionSimple";
import StepsCardsSection from "~/components/StepsCardsSection";
import Typo from "~/components/Typo";
import { PAGE_404 } from "~/constants/paths";
import { Service, SERVICES } from "~/data/services";
// import { STACKS } from "~/data/stack";
import apiProject from "~/services/api/projects";
import { Project } from "~/services/api/projects/types";
import { mapTechnologyToStack } from "~/services/api/technologies/helpers";
import { Technology } from "~/services/api/technologies/types";
import apiTechnologyCategories from "~/services/api/technologyCategories";
import { TechnologyCategory } from "~/services/api/technologyCategories/types";

type LoaderData = {
  service: Service;
  technologyCategory: TechnologyCategory | null;
  projects: Array<Project>;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { serviceId } = params;

  const service = SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return redirect(PAGE_404);
  }

  return Promise.all([
    apiProject.getProjects({ populate: "deep", sort: "date:desc" }),
    apiTechnologyCategories.getTechnologyCategories({
      "pagination[pageSize]": 1000,
      populate: "deep",
      "filters[id]": service.categoryId,
    }),
  ])
    .then(res => {
      return {
        service,
        projects: res[0].data,
        technologyCategory: res[1].data[0],
      } as LoaderData;
    })
    .catch(() => {
      return {
        service,
        projects: [],
        technologyCategory: null,
      } as LoaderData;
    });
};

export const meta: MetaFunction = ({ data, location }) => {
  const title = `${data.service.title} – Nyoka`;
  const { description, preview } = data.service;
  const { medium } = preview;

  const pageUrl = `https://nyoka.io${location.pathname}`;

  return {
    title,
    description,
    // keywords: TODO,
    "og:title": title,
    "og:url": pageUrl,
    "og:image": medium.url,
    "og:image:width": medium.width,
    "og:image:height": medium.height,
    "og:description": description,
    "twitter:title": title,
    "twitter:url": pageUrl,
    "twitter:description": description,
    "twitter:image": medium.url,
  };
};

export default function ServiceId() {
  const data = useLoaderData();
  const { service, projects, technologyCategory } = data as LoaderData;

  const stack = useMemo(() => {
    if (technologyCategory && technologyCategory.attributes.technologies) {
      return technologyCategory.attributes.technologies.data.map(
        (technology: Technology) => mapTechnologyToStack(technology)
      );
    }

    return [];
  }, [technologyCategory]);

  return (
    <PageContainer>
      <div className="relative flex justify-center min-h-[472px] dp:min-h-[774px] dpb:min-h-[856px] w-full">
        <div className="z-10 absolute top-0 left-0 w-full h-[370px] dp:h-[580px] dpb:h-[626px] bg-gradient-to-r from-green500 to-blue500" />
        <Container className="relative z-20">
          <div className="relative z-10 flex flex-col items-center pt-10 dp:pt-20 gap-5 dp:gap-10 text-white text-center sm:max-w-full">
            <div data-aos="fade-down">
              <Typo fw="light" tag="h1" className="max-w-[270px] dp:max-w-none">
                {service.title}
              </Typo>
            </div>
            <div data-aos="fade-down" data-aos-duration="1500">
              <Typo
                tag="h2"
                tagStyles="h4"
                className="max-w-[299px] dp:max-w-[1060px] px-0 dp:px-1 text-sm leading-5 dp:text-2xl dpb:text-4xl font-light dp:leading-[44px]"
              >
                {service.description}
              </Typo>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[312px] dp:w-[1000px] dp:h-[614px] dpb:w-[1200px] dpb:h-[696px]">
            <picture>
              <source
                srcSet={`/img/services/${service.preview.big}`}
                media="(min-width: 1461px)"
                width="1200"
                height="696"
              />
              <source
                srcSet={`/img/services/${service.preview.medium}`}
                media="(min-width: 1100px)"
                width="1000"
                height="614"
              />
              <img
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
                width="375"
                height="312"
                className="relative w-full h-full object-contain"
                src={`/img/services/${service.preview.small}`}
                alt={service.title}
              />
            </picture>
          </div>
        </Container>
      </div>

      <IconsSection items={service.get} />

      {projects.length > 0 && (
        <ProjectsSection animated projects={projects} noAction title="Cases" />
      )}
      <StepsCardsSection
        items={service.process}
        isCenter
        label="Want to test a new idea, bring a concept to life or improve a digital product? Great! Our dedicated web team will guide you through the following steps and partner you through the entire product development process"
      />
      <StackSectionSimple isCenter items={stack} />
      <SectionForm
        id="services-form"
        title="Create or improve your digital product"
      />
    </PageContainer>
  );
}
