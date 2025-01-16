import React, { createRef, useEffect } from "react";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
} from "chart.js";

Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip
);

const ChartComponent = ({ data, width, height }) => {
  const canvasRef = createRef();

  useEffect(() => {
    const ctx = canvasRef.current;
    new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((m) => m.x),
        datasets: [
          {
            label: "Max.Temperature",
            data: data.map((m) => m.y),
            backgroundColour: "rgba(255,99,132,0.1)",
          },
        ],
      },
      options: {
        scales: {
          yAxes: [{ ticks: { beginsAtZero: false } }],
        },
      },
    });
  });
  return (
    <canvas id="chart-canvas" width={width} height={height} ref={canvasRef} />
  );
};

export default ChartComponent;
