import React from "react";
import "./style.css"
import Arrazao from "../../assets/icons/Arrazao.svg";

const ArrazoSupremo = () => {
  return (
    <div className="arrazao-wrapper">
      <a href="#arrazao"></a>
      <img id="arrazao" src={Arrazao} />
    </div>
  );
};

export default ArrazoSupremo;
