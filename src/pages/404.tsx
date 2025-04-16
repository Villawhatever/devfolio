import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const classes = {
  title: "text-lg font-bold",
  link: "underline",
};

const NotFoundPage = () => (
  <Layout>
    <Seo title="Not found" />
    <h1 className={classes.title}>404: Not Found</h1>
    <p>
      Whatever you're looking for doesn't seem to exist.{" "}
      <Link className={classes.link} to="/">
        Go home instead
      </Link>
      .
    </p>
  </Layout>
);

export { NotFoundPage };
