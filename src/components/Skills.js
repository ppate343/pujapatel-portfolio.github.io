import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data = [
  { id: 1, value: 30, label: "Data Science", color: "fuchsia" },
  { id: 2, value: 50, label: "Full Stack Web Development", color: "hotpink" },
  { id: 3, value: 20, label: "Project Management", color: "lightpink" },
];

const Skills = () => {
  return (
    <div className="skills">
      <PieChart
        series={[
          {
            data,
            labelKey: "label",
            valueKey: "value",
            colorKey: "color",
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "white" },
          },
        ]}
        height={300}
        width={700}
        slotProps={{
          legend: {
            labelStyle: {
              fontSize: 10,
              fill: "white",
            },
          },
        }}
      />
    </div>
  );
};

export default Skills;
