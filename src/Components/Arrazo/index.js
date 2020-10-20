import React from "react";
import "./style.css"
import Arrazo from "../../assets/icons/Arrazo.svg";

const Arrazos = (props) => {
  return (
    <div id="arrazo-wrapper" className={props.cor} >
      <a href="#arrazo"></a>
      <img id="arrazo" src={Arrazo} />
    </div>
  );
};

export default Arrazos;
