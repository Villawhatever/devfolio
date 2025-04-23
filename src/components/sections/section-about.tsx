import React from "react";

import { Section } from "./section";

interface SectionAboutProps {
  about: string,
};

const SectionAbout = ({ about }: SectionAboutProps) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        <p>{about}</p>
      </div>
    </Section>
  );
};

export { SectionAbout };
