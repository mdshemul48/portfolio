import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

export default function Projects() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
