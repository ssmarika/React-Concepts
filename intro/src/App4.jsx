import React from "react";
// ! CONDITIONAL RENDERING
// to insert js inside html use {}

// const App = () => {
//   let num = 31;
//   let rem = num % 2;

//   if (rem === 0) {
//     return <p>{num} is an Even Number</p>;
//   }
//   return <p>{num} is an Odd Number</p>;
// };

// ? Using ternary

// const App = () => {
//   let num = 1;
//   let rem = num % 2;
//   return <p>{rem === 0 ? "even" : "odd"}</p>;
// };

const App4 = () => {
  let loggedIn = true;
  return <p>{loggedIn ? "You are logged in." : "You are logged out"}</p>;
};
export default App4;
