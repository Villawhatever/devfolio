import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const mapUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = ({ data, onClickCallback }) => {
  const events = data.allMongodbVillawhateverEvents.edges;

  return (
    events &&
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={mapUrl}>
        {({ _, outline, borders }) => (
          <>
            <Geography geography={outline} fill="#E9E3DA" />
            <Geography geography={borders} fill="none" stroke="#FFF" />
          </>
        )}
      </Geographies>
      {events.map((event) => {
        return <Marker key={event.node.id} coordinates={event.node.city.coords}>
          <circle r={8} fill="#E42A1D" stroke="#fff" strokeWidth={2} onClick={() => onClickCallback(event.node.city.name)} />
        </Marker>
      })}

    </ComposableMap>
  );
};

export default MapChart;
