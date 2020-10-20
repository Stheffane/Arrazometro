import React from "react";
import "./style.css";
import Close from "../../assets/icons/close.svg";

const BtnDelete = () => {
  return (
    <div className="icon-close">
      <button id="delete">
        <img src={Close} />
      </button>
    </div>
  );
};

export default BtnDelete;
