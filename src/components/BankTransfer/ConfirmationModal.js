import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

import "./ConfirmationModal.css";

const ConfirmationModal = ({show, toggle}) => {
    return (
        <div className="confirmation-modal">
            <div> {/*for background*/}
            <h1>SUKCES</h1>
            <p>Przelew wykonany pomyślnie</p>
            <p className="smaller">(jest on widoczny w historii konta)</p>
            <FontAwesomeIcon icon={faCheckCircle} onClick={()=>{toggle(!show)}} />
            </div>
        </div>
    )
};

export default ConfirmationModal;