import React from "react";
import Badge from "./badge";

const EventData = ({ event, city }) => {
  return <div style={{ margin: "1em 0" }}>
    <b>{event.name}</b>
    {event.role &&
      <Badge text={event.role} />
    }
    <p>{!city && event.city.name} {new Date(event.date).toLocaleDateString()}</p>
  </div>
}

export default EventData;