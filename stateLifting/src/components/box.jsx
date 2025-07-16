import React from "react";
function Box(props) {
  return (
    <>
      <p>this is the {props.name}</p>
      {props.children}
      <button onClick={props.increament}>Click me</button>
      <h2>{props.value}</h2>
    </>
  );
}

export default Box;
