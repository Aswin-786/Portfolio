import React from "react";
import { Annotation, ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";

const WorldMap = () => {

  return (
    <div>
      <ComposableMap>
        <ZoomableGroup center={[78.9629, 20.5937]} zoom={2}>
          <Geographies geography="/features.json" strokeWidth={0.5}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#caece8",
                      stroke: "#888",
                      strokeWidth: 0.5,
                    },
                    hover: {
                      fill: "#33ccff",
                      stroke: "#888",
                      strokeWidth: 0.5,
                    },
                    pressed: {
                      fill: "#007bff",
                      stroke: "#888",
                      strokeWidth: 0.5,
                    },
                  }}
                />
              ))
            }
          </Geographies>
          <Annotation
            subject={[78.9629, 20.5937]}
            dx={90}
            dy={-30}
            connectorProps={{
              stroke: "red",
              strokeWidth: 2.5,
              strokeLinecap: "round"
            }}
          >
            <text className="font-bold " x="18" y="-6" textAnchor="end" alignmentBaseline="middle" fill=" red">
              {"Aswin"}
            </text>
          </Annotation>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
