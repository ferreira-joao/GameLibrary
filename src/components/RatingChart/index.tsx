import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.color = "#fff";

interface IRatingChart {
  titles: string[];
  ratings: number[];
}

const RatingChart: React.FC<IRatingChart> = ({ titles, ratings }) => {
  const [ratingsLabels, setRatingsLabels] = useState<string[]>([]);

  const [ratingsColors, setRatingsColors] = useState<string[]>([]);

  const handleRateConfigs = () => {
    let ratings_labels: string[] = [];
    let ratings_colors: string[] = [];

    titles.forEach((e) => {
      switch (e) {
        case "exceptional":
          ratings_labels.push("Exceptional");
          ratings_colors.push("rgba(167, 226, 75, 1)");
          break;
        case "recommended":
          ratings_labels.push("Recommended");
          ratings_colors.push("rgba(94, 143, 243, 1)");
          break;
        case "meh":
          ratings_labels.push("Meh");
          ratings_colors.push("rgba(250, 197, 84, 1)");
          break;
        case "skip":
          ratings_labels.push("Skip");
          ratings_colors.push("rgba(253, 76, 90, 1)");
          break;
      }
    });

    setRatingsLabels(ratings_labels);
    setRatingsColors(ratings_colors);
  };

  const data = {
    labels: ratingsLabels,
    datasets: [
      {
        data: ratings,
        backgroundColor: ratingsColors,
        borderColor: ratingsColors,
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    handleRateConfigs();
  }, [titles]);

  return (
    <>
      <Doughnut data={data} />
    </>
  );
};

export default RatingChart;
