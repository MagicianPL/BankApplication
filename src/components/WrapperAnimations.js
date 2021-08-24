import React from "react";
import Block from "../Block";

const WrapperAnimations = () => {
  return (
    <div className="wrapper-animations">
      <Block text={<h2>Hello World</h2>} />
      <Block text={<h2>Hello World2</h2>} />
      <Block addclass="block-three"text={<h2>Hello World3</h2>} />
    </div>
  );
};

export default WrapperAnimations;
