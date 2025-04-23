import React from "react";

import { Section } from "./section";
import { SummaryItem } from "./summary-item";
import { SectionItem } from "../../types/generic";

interface ExperienceProps {
  experience: SectionItem[],
};

const SectionExperience = ({ experience }: ExperienceProps) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export { SectionExperience };
