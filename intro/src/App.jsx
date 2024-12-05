import React from "react";
import Score from "./Score";

const playerData = [
  {
    id: 1,
    name: "Kushal Bhurtel",
    run: 30,
  },
  {
    id: 2,
    name: "Shikhar Dhawan",
    run: 150,
  },
  {
    id: 3,
    name: "Rohit Paudel",
    run: 171,
  },
];
const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vd",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {playerData.map((item, index, array) => {
        return <Score key={item.id} name={item.name} run={item.run} />;
      })}
    </div>
  );
};

export default App;
