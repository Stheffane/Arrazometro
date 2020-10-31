import React from "react";
import "./style.css";
import BtnDelete from "../BtnDelete";
import Name from "../Name";
import ArrazoGroup from "../ArrazoGroup";
import AzzaroSupremo from "../ArrazoSupremo";

const Frame = () => {
  return (
    <div className="poc-frame">
      <BtnDelete />
      <Name nome="Pocona"/>
      <ArrazoGroup />
      <AzzaroSupremo />
    </div>
  );
};

export default Frame;
