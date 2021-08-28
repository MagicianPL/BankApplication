import React from "react";

const Block = (props) => {
  return (
    <div className={`block ${props.addclass}`}>
      <div className="circle">{props.icon}</div>
      <p>{props.text}</p>
    </div>
  );
};

export default Block;
