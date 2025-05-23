import { Link } from "gatsby";
import React, { ReactElement } from "react";

const classes = {
  wrapper: "mb-6",
  name: "font-semibold text-gray-900 pb-1",
  description: "text-md text-gray-600 font-light",
};

interface SummaryItemProps {
  name: string,
  description: string,
  link?: string,
  internal?: boolean,
};

const SummaryItem = ({ name, description, link = "", internal = false }: SummaryItemProps) => {
  let linkContent: ReactElement;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${link ? "hover:underline hover:text-black" : ""
          }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export { SummaryItem };
