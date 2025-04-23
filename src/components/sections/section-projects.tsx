import React from "react";

import { Section } from "./section";
import { SummaryItem } from "./summary-item";
import { SectionItem } from "../../types/generic";

interface ProjectsProps {
  projects: SectionItem[],
};

const SectionProjects = ({ projects }: ProjectsProps) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))}
    </Section>
  );
};

export { SectionProjects };