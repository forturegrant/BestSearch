// @ts-nocheck
import * as React from "react";
import { Chart as DxChart, AreaSeries } from "@devexpress/dx-react-chart-material-ui";
import { curveCatmullRom, area } from "d3-shape";

function Area(props) {
  const path = area()
    .x(({ arg }) => arg)
    .y1(({ val }) => val)
    .y0(({ startVal }) => startVal)
    .curve(curveCatmullRom);

  return <AreaSeries.Path {...props} path={path} />;
}

function Chart(props) {
  const { data } = props;
  return (
    <DxChart data={data}>
      <AreaSeries
        name="sv"
        valueField="sv"
        argumentField="date"
        seriesComponent={Area}
      />
    </DxChart>
  );
}

export default Chart;
