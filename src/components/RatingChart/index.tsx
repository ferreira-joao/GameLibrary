import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.color = "#fff";

const data = {
  labels: ["Exceptional", "Recommended", "Meh", "Skip"],
  datasets: [
    {
      data: [3775, 1333, 143, 116],
      backgroundColor: [
        "rgba(167, 226, 75, 1)",
        "rgba(94, 143, 243, 1)",
        "rgba(250, 197, 84, 1)",
        "rgba(253, 76, 90, 1)",
      ],
      borderColor: [
        "rgba(167, 226, 75, 1)",
        "rgba(94, 143, 243, 1)",
        "rgba(250, 197, 84, 1)",
        "rgba(253, 76, 90, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const RatingChart: React.FC = () => {
  return (
    <>
      <Doughnut data={data} />
    </>
  );
};

export default RatingChart;
