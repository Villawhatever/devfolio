import { AllMongodbVillawhateverEvents } from "./events";

export interface TopLevelDataObject {
  data: Data,
};

export interface Data {
  allMongodbVillawhateverEvents: AllMongodbVillawhateverEvents,
  site: Site,
};

export interface Site {
  siteMetadata: SiteMetadata,
};

export interface SiteMetadata {
  name: string,
  title: string,
  description: string,
  about: string,
  author: string,
  github: string,
  bluesky: string,
  linkedin: string,
};

export interface Edge {
  node: Node,
};

export interface Node {
  id: string,
};

export interface SectionItem {
  name: string,
  description: string,
  link: string,
};