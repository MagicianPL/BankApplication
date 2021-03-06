import React from "react";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <SlideOne />
      <SlideTwo />
      <SlideThree />
    </header>
  );
};

export default Header;
