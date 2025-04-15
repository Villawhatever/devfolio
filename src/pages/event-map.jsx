import { graphql } from "gatsby";
import React, { useState, useEffect } from "react";

import Header from "../components/header";
import Layout from "../components/layout";
import Seo from "../components/seo";
import MapChart from "../components/event-map";
import EventData from "../components/event";

const Index = ({ data }) => {
  const [allEvents, setAllEvents] = useState([]);
  const [filtered, setFiltered] = useState({
    events: [],
    city: "",
  })

  const filterEvents = (city) => {
    const filteredEvents = allEvents.filter((event) => {
      return (
        event.node.city.name === city
      );
    });
    setFiltered({
      events: filteredEvents.sort((a, b) => new Date(b.node.date) - new Date(a.node.date)),
      city: city,
    });
  };

  useEffect(() => {
    setAllEvents(data.allMongodbVillawhateverEvents.edges);
  }, [data.allMongodbVillawhateverEvents.edges]);

  return (
    <Layout>
      <Seo title="Event Map" />
      <Header metadata={data.site.siteMetadata} data={data} />
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <MapChart data={data} onClickCallback={filterEvents} />
        <div style={{ width: "30%", height: "300px" }}>
          {filtered.city &&
            <div>
              <b>{filtered.city}</b>
            </div>
          }
          <div style={{ overflowY: "scroll" }}>
            {filtered.events.map((event) => (
              <EventData event={event.node} city={filtered.city} key={event.node.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout >
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
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date:  DESC }}) {
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
    allMongodbVillawhateverEvents {
      edges {
        node {
          id
          organizer
          date
          name
          city {
            name
            coords
          }
          game
          role
        }
      }
    }
  }
`;
