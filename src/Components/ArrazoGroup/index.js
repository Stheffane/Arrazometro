import React from "react";
import "./style.css";
import Arrazo from "../Arrazo";

const ArrazoGroup = () => {
  
  return (
    <div className="arrazo-group">
      <Arrazo cor="azul" />
      <Arrazo cor="roxo" />
      <Arrazo cor="rosa" />
      <Arrazo cor="amarelo" />
      <Arrazo cor="azul" />
      <Arrazo cor="roxo" />
    </div>
  )
};

export default ArrazoGroup;
