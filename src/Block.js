import React from "react";

const Block = (props) => {
  return (
    <div className={`block ${props.addclass}`}>
      <div className="circle"></div>
      {props.text}
    </div>
  );
};

export default Block;
