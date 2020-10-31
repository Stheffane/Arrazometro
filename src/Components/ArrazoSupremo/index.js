import React from "react";
import "./style.css"
import Arrazao from "../../assets/icons/Arrazao.svg";

const ArrazoSupremo = () => {
  return (
    <button className="arrazao-wrapper">
      <img id="arrazao" src={Arrazao} alt="caracteres que simulam um rosto usando uma coroa e sorrindo"/>
    </button>
  );
};

export default ArrazoSupremo;
