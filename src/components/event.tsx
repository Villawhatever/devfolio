import React from "react";
import { Badge } from "./badge";
import { JudgeEvent } from "../types/events";

interface EventDisplayProps {
  event: JudgeEvent,
  city: string,
};

const EventDisplay = (props: EventDisplayProps) => {
  let gameIcon;
  switch (props.event.game) {
    case "Magic: the Gathering":
      gameIcon = <i className="ms ms-dfc-ignite" />;
      break;
    case "Lorcana":
      gameIcon = <i className="ms ms-dfc-enchantment" />;
      break;
    case "Riftbound":
      gameIcon = <i className="ms ms-dfc-day" />;
      break;
  }

  return <div style={{ margin: "1em 0" }}>
    {props.event.game && gameIcon}
    <b>{props.event.name}</b>
    {props.event.role &&
      <>
        <br /><Badge text={props.event.role} />
      </>
    }
    <p>{!props.city && props.event.city.name} {new Date(props.event.date).toLocaleDateString()}</p>
  </div>
};

export { EventDisplay };