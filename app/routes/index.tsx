/* eslint-disable import/no-extraneous-dependencies */
import { useLoaderData, useLocation } from "@remix-run/react";
import { useEffect, useMemo } from "react";
import AOS from "aos";
import Hero from "~/components/Hero";
import AboutSection from "~/components/AboutSection";
import CompanySection from "~/components/CompanySection";
import ServicesSection from "~/components/ServicesSection";
import WhatYouGet from "~/components/WhatYouGet";
import ProjectsSection from "~/components/ProjectsSection";
import CustomersSection from "~/components/CustomersSection";
import StackSection from "~/components/StackSection";
import HowWorkSection from "~/components/HowWorkSection";
import BlogSection from "~/components/BlogSection";
import ScalabilitySection from "~/components/ScalabilitySection";
import HeaderTransparent from "~/components/layout/HeaderTransparent";
import Footer from "~/components/Footer";
import apiProject from "~/services/api/projects";
import apiTechnologies from "~/services/api/technologies";
import apiTechnologyCategories from "~/services/api/technologyCategories";
import apiPost from "~/services/api/posts";
import useMediaQuery, { medias } from "~/hooks/useMediaQuery";
import { DEFAULT_PAGINATION } from "~/services/api/types";

export const loader = async () => {
  return Promise.all([
    apiProject.getProjects({
      populate: "deep",
      ...DEFAULT_PAGINATION,
    }),
    apiTechnologies.getTechnologies({
      populate: "deep",
      "pagination[pageSize]": 100,
    }),
    apiTechnologyCategories.getTechnologyCategories(),
    apiPost.getPosts({
      populate: "deep",
      ...DEFAULT_PAGINATION,
    }),
  ])
    .then(res => {
      return {
        projects: res[0].data,
        technologies: res[1].data,
        technologiesCategories: res[2].data,
        posts: res[3].data,
      };
    })
    .catch(() => ({
      projects: [],
      technologies: [],
      technologiesCategories: [],
      posts: [],
    }));
};

export default function Index() {
  const {
    projects,
    technologies,
    technologiesCategories,
    posts = [],
  } = useLoaderData();
  const isDesktop = useMediaQuery(medias.DESKTOP);

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.scrollTo(0, 0);
      const scrollToContainer = document.getElementById(hash.slice(1));

      if (scrollToContainer) {
        setTimeout(() => {
          scrollToContainer.scrollIntoView({
            behavior: "smooth",
          });
        }, 1000);
      }
    }

    setTimeout(() => {
      AOS.refresh();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postsDevices = useMemo(
    () => (isDesktop ? posts.slice(0, 3) : posts),
    [isDesktop, posts]
  );

  return (
    <>
      <main className="flex-auto overflow-hidden">
        <HeaderTransparent />
        <Hero />
        <AboutSection />
        <CompanySection />
        <ServicesSection />
        <WhatYouGet />
        <ProjectsSection animated title="Case studies" projects={projects} />
        <CustomersSection />
        <StackSection
          technologiesCategories={technologiesCategories}
          technologies={technologies}
        />
        <HowWorkSection />
        <BlogSection isSliderMobile isLink type="grid" posts={postsDevices} />
        <ScalabilitySection />
      </main>
      <Footer />
    </>
  );
}
