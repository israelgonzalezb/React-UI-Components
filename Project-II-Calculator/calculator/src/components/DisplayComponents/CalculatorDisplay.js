import React from "react";
import "./Display.css";

const Display = (props) => {
    return (
      <div className="display">
        <span>{props.total}</span>
      </div>
    );
  }

/*
const Display = () => {
  return (
    <div className="display">
      <span>0</span>
    </div>
  );
};
*/

export default Display;
