import React from "react";
import Block from "./Block";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandshake,
  faMoneyBill,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";
/*<FontAwesomeIcon icon={faHandshake, faMoneyBill, faEuroSign} />*/

const WrapperAnimations = () => {
  return (
    <div className="wrapper-animations">
      <Block
        addclass="block-one"
        text="Minimum formalności"
        icon={<FontAwesomeIcon icon={faHandshake} />}
      />
      <Block
        addclass="block-two"
        text="U nas zarabiasz więcej"
        icon={<FontAwesomeIcon icon={faMoneyBill} />}
      />
      <Block
        addclass="block-three"
        text="Błyskawiczne przewalutowanie"
        icon={<FontAwesomeIcon icon={faEuroSign} />}
      />
    </div>
  );
};

export default WrapperAnimations;
