import React, {useState} from 'react';

const Para = () => {

    let [isRed, colorChange] = useState(false);

    const message = () => {
        console.log("Kliknięto!");
        colorChange(!isRed);
    };

    return (
    <>
        <p>To jest pierwszy paragraf!</p>
        <p className = {isRed ? "change" : null}>To jest drugi paragraf! - całość jest komponentem</p>
        <button onClick={message}>Kliknij</button>
    </>
    );
};

export default Para;