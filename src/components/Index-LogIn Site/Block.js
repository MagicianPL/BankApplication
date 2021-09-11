import React from "react";

import "./Block.css";

const Block = (props) => {
  return (
    <div className={`block ${props.addclass}`}>
      <div className="circle">{props.icon}</div>
      <p>{props.text}</p>
    </div>
  );
};

export default Block;
