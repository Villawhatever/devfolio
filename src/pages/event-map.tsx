import { graphql } from "gatsby";
import React, { useState, useEffect } from "react";

import Header from "../components/header";
import Seo from "../components/seo";
import MapChart from "../components/event-map";
import { EventDisplay } from "../components/event";
import { JudgeEvent } from "../types/events";
import { TopLevelDataObject } from "../types/generic";
import { Layout } from "../components/layout";

interface EventsFilter {
  events: JudgeEvent[],
  city: string
};

const EventMap = ({ data }: TopLevelDataObject) => {
  const [allEvents, setAllEvents] = useState<JudgeEvent[]>([]);
  const [filtered, setFiltered] = useState<EventsFilter>({
    events: [],
    city: "",
  });

  const filterEvents = (city: string) => {
    const filteredEvents = allEvents.filter((event: JudgeEvent) => {
      return (
        event.city.name === city
      );
    });
    setFiltered({
      events: filteredEvents.sort((a, b) => b.date.valueOf() - a.date.valueOf()),
      city: city,
    });
  };

  useEffect(() => {
    const events = data.allMongodbVillawhateverEvents.edges.map((edge) => edge.node as JudgeEvent);
    setAllEvents(events);
    setFiltered({
      events: events,
      city: ""
    })
  }, [data.allMongodbVillawhateverEvents.edges]);

  return (
    <Layout>
      <Seo title="Event Map" />
      <Header data={data} />
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <MapChart data={data} onClickCallback={filterEvents} />
        <div style={{ width: "30%", height: "300px", overflowY: "scroll" }}>
          {filtered.city &&
            <div>
              <b>{filtered.city}</b>
            </div>
          }
          <div>
            {filtered.events.map((event: JudgeEvent) => (
              <EventDisplay event={event} city={filtered.city} key={event.id} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventMap;

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
    allMarkdownRemark(sort: { frontmatter: { date: DESC }}) {
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
    allMongodbVillawhateverEvents(sort: { date: DESC }) {
      edges {
        node {
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
