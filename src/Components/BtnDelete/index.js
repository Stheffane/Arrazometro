import React from "react";
import "./style.css";
import Close from "../../assets/icons/close.svg";

const BtnDelete = () => {
  return (
    <div className="icon-close">
      <button id="delete">
        <img src={Close} alt="caractere X para sibolizar a opção de excluir o card de arrazos"/>
      </button>
    </div>
  );
};

export default BtnDelete;
