import React from "react";
import { Badge } from "./badge";
import { JudgeEvent } from "../types/events";

interface EventDisplayProps {
  event: JudgeEvent,
  city: string,
};

const EventDisplay = (props: EventDisplayProps) => {
  return <div style={{ margin: "1em 0" }}>
    <b>{props.event.name}</b>
    {props.event.role &&
      <Badge text={props.event.role} />
    }
    <p>{!props.city && props.event.city.name} {new Date(props.event.date).toLocaleDateString()}</p>
  </div>
};

export { EventDisplay };