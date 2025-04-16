import { Link } from "gatsby";
import get from "lodash/get";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { TopLevelDataObject } from "../types/generic";

const classes = {
  wrapper: "block mb-6 md:flex",
  imageWrapper: "w-full max-w-150",
  image: "rounded-full transform transition-all duration-150 hover:scale-105",
  contentWrapper: "flex-none pt-6 md:pt-1 md:flex-1 md:pl-20",
  name: "text-5xl text-gray-900 font-bold leading-tight hover:text-black",
  description: "text-gray-600",
  list: "mt-6 uppercase tracking-wider",
  item: "inline list-none pr-4",
  link: "inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black",
};

const Header = ({ data }: TopLevelDataObject) => {
  const twitter = get(data.site.siteMetadata, "author", false);
  const github = get(data.site.siteMetadata, "github", false);
  const bluesky = get(data.site.siteMetadata, "bluesky", false);
  const linkedin = get(data.site.siteMetadata, "linkedin", false);

  const posts = data.allMarkdownRemark.edges;
  const noBlog = !posts || !posts.length;

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <StaticImage
            className={classes.image}
            src="../images/profile.jpg"
            alt={data.site.siteMetadata.name}
            placeholder="dominantColor"
            layout="fullWidth"
          />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{data.site.siteMetadata.name}</Link>
        </h1>
        <p className={classes.description}>{data.site.siteMetadata.description}</p>
        <ul className={classes.list}>
          {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
          )}
          {github && (
            <li className={classes.item}>
              <a className={classes.link}
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          )}
          {bluesky && (
            <li className={classes.item}>
              <a className={classes.link}
                href={bluesky}
                target="_blank"
                rel="noreferrer"
              >
                Bluesky
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
            </li>
          )}
          <li className={classes.item}>
            <Link className={classes.link} to="/event-map">
              Event Map
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
