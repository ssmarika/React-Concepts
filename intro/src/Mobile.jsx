import React from "react";
//! Concept of children
// reference in app3

const Mobile = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.children}</p>
    </div>
  );
};

export default Mobile;
