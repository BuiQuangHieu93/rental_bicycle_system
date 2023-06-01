import React from "react";

const CircularProgress = ({ progress, title }) => {
  const radius = 20; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const strokeDashoffset = (1 - progress) * circumference; // Offset based on progress percentage

  const circleStyle = {
    fill: "red",
    stroke: "lightgray",
    strokeWidth: 4,
  };

  const progressStyle = {
    fill: "none",
    stroke: "green",
    strokeWidth: 4, // Width of the progress line
    strokeLinecap: "round",
    strokeDasharray: circumference,
    strokeDashoffset: strokeDashoffset,
    transformOrigin: "center",
    transform: `rotate(0deg)`,
  };

  const textStyle = {
    dominantBaseline: "middle",
    textAnchor: "middle",
    fontSize: "12px",
    fill: "black",
    transformOrigin: "center",
    transform: `rotate(270deg)`,
  };

  return (
    <div style={{ display: "inline-block", transform: "rotate(90deg)" }}>
      <svg width={2 * radius} height={2 * radius}>
        <circle cx={radius} cy={radius} r={radius - 5} style={circleStyle} />
        <circle cx={radius} cy={radius} r={radius - 5} style={progressStyle} />
        <text x={radius} y={radius} style={textStyle}>
          {title}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
