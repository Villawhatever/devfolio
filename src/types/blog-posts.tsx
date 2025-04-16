import { Edge, Node, Site } from "./generic";

export interface TopLevelBlogObject {
  data: BlogPostBySlug,
};

export interface AllMarkdownRemark {
  edges: Edge[]
};

export interface BlogPost extends Node {
  excerpt: string,
  fields: Field[],
  frontMatter: FrontMatter,
};

export interface Field {
  slug: string,
};

export interface FrontMatter {
  date: string,
  title: string,
  description: string,
};

export interface BlogPostBySlug {
  site: Site,
  markdownRemark: MarkdownRemark,
};

export interface MarkdownRemark {
  id: number,
  excerpt: string,
  html: string,
  frontMatter: FrontMatter,
};