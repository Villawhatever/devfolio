import React from "react";

import { Section } from "./section";
import { SummaryItem } from "./summary-item";
import { SectionItem } from "../../types/generic";

interface SkillsProps {
  skills: SectionItem[],
};

const SectionSkills = ({ skills }: SkillsProps) => {
  return (
    <Section title="Skills">
      {skills.map((skill) => (
        <SummaryItem
          key={skill.name}
          name={skill.name}
          description={skill.description}
        />
      ))}
    </Section>
  );
};

export { SectionSkills };
