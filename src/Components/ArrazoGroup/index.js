import React from "react";
import "./style.css";
import Arrazo from "../Arrazo";

const ArrazoGroup = () => {
  let n = 0;
  return (
    <div className="arrazo-group">
      <Arrazo cor={"azul"} />
      <Arrazo cor={"roxo"} />
      <Arrazo cor="rosa" />
      <Arrazo cor="amarelo" />
      <Arrazo cor="azul" />
      <Arrazo cor="roxo" />
    </div>
  )
};

export default ArrazoGroup;
