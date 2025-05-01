import React from "react";

const Badge = ({ text }) => {
  const role = text.split(" ").pop();
  let color: string;

  switch (role) {
    case "HJ":
      color = "#0819a7";
      break;
    case "Lead":
      color = "#08a714";
      break;
    default:
      color = "#910004";
      break;
  }
  const style = {
    display: "inline-block",
    padding: "2px 7px",
    borderRadius: "12px",
    backgroundColor: color,
    color: "#ffffff",
    marginLeft: ".5em"
  };

  return (
    <div style={style}>
      <b>{text}</b>
    </div>
  );
};

export { Badge };
