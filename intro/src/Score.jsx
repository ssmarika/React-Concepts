import React from "react";

const Score = (props) => {
  return (
    <div
      style={{
        width: 300,
        display: "flex",
        borderRadius: "1rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: props.run >= 100 ? "5px solid red" : "1px solid black",
        margin: "1rem",
      }}
    >
      <h3>{props.name}</h3>
      <h4>Runs:{props.run}</h4>
    </div>
  );
};

export default Score;
