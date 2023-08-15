"use client";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "@/components/shared/SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useActiveSection } from "@/app/hooks/useActiveSection";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);
  return (
    <section className="scroll-mt-28" id="projects" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
