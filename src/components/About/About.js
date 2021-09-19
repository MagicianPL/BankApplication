import React from 'react';

import "./About.css";
import bank from "./bank.jpg";

const About = () => {
return (
    <div className="about-bank">
        <h1>O BANKU</h1>
        <div className="motto">,,Pieniądze robią pieniądze"</div>
        <div className="text">
            <p>Wiemy, że <span>zaufanie do Banku,</span> to trzon dobrej obsługi Klienta - ochrona Twoich funduszy jest dla nas najważniejsza.</p>
            <p>Chcemy także dać Ci możliwość oszczędzania czy podjęcia kredytu na bardzo dobrych warunkach. Od zawsze chcieliśmy być najlepsi i konkurencyjni dla innych banków.</p>
            <p>Powstaliśmy w 1993 roku przy ul. Skąpców 100 i <span className="bold">zmieniamy świat na lepsze!</span></p>
        </div>
    </div>
)
};

export default About;