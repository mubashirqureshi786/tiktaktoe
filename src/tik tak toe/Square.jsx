import React from "react";
import "./TikTakStyle.css";

const Square = (props) => {
  return (
    <div className="board-square" onClick={props.onClick}>
      <h2>{props.value}</h2>
    </div>
  );
};

export default Square;
