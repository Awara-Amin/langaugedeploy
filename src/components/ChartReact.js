import React from "react";

import { VictoryPie } from "victory-pie";

const myData = [
  { x: "Javascript", y: 1000 },
  { x: "CSS", y: 200 },
  { x: "html", y: 200 },
];

const ChartReact = () => {
  return (
    <>
      <div style={{ height: 320 }}>
        <div className="textChart">
          <h1>Frontend programs</h1>
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
export default ChartReact;
