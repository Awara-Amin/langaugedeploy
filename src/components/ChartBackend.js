import React from "react";

import { VictoryPie } from "victory-pie";

const myData = [
  { x: "Node.js/Express-server", y: 300 },
  { x: "Redux", y: 100 },
  { x: "MangoDB", y: 200 },
];

const ChartBackend = () => {
  return (
    <>
      <div style={{ height: 320 }}>
        <div className="textChart">
          <h1>Backend programs</h1>
        </div>

        <VictoryPie
          data={myData}
          colorScale={["blue", "yellow", "red"]}
          radius={130}
        />
      </div>
    </>
  );
};
export default ChartBackend;
