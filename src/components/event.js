import React from "react";

const EventData = ({ event }) => {
  return <div style={{ margin: "1em 0" }}>
    <b>{event.organizer} {event.type}</b>
    <p>{new Date(event.date).toLocaleDateString()}</p>
  </div>
}

export default EventData;