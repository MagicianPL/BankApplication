import React from "react";
import ReactDOM from 'react-dom';
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";

const Header = () => {
    return (
        <header>
            <SlideOne />
            <SlideTwo />
        </header>
    );
};

export default Header;