import "../App.css";
import React from "react";
function Box(props) {
  return (
    <>
      <div className="component-box-div">
        <div className="componentBox">
          Hello there this is : {props.name}
          {props.children}
        </div>
      </div>
    </>
  );
}

export default Box;
