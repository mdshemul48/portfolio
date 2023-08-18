"use client";
import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSelection } from "@/hooks/useSelection";

export default function Projects() {
  const { ref } = useSelection("Projects", 0.5);
  return (
    <section className="scroll-mt-28 mb-28" id="projects" ref={ref}>
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
