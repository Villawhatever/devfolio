import { graphql } from "gatsby";
import { get } from "lodash";
import React from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import SectionAbout from "../components/section-about";
import SectionExperience from "../components/section-experience";
import SectionProjects from "../components/section-projects";
import SectionSkills from "../components/section-skills";
import Seo from "../components/seo";
import { TopLevelDataObject } from "../types/generic";

const Index = ({ data }: TopLevelDataObject) => {
  const about = get(data, "site.siteMetadata.about", "");
  const projects = get(data, "site.siteMetadata.projects", []);

  const experience = get(data, "site.siteMetadata.experience", []);
  const skills = get(data, "site.siteMetadata.skills", []);

  return (
    <Layout>
      <Seo title="" />
      <Header data={data} />
      {about && <SectionAbout about={about} />}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {experience && experience.length && (
        <SectionExperience experience={experience} />
      )}
      {skills && skills.length && <SectionSkills skills={skills} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        bluesky
        linkedin
        projects {
          name
          description
          link
        }
        experience {
          name
          description
        }
        skills {
          name
          description
        }
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date:  DESC }}
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
