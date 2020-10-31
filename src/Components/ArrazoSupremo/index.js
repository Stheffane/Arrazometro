import React, { useState } from "react";
import "./style.css"
import Arrazao from "../../assets/icons/Arrazao.svg";

const ArrazoSupremo = () => {
  const [ativo, setAtivo] = useState(false);

  return (
    <button id="arrazou" className="arrazao-wrapper" onClick={() => setAtivo(!ativo)} >
      
      { ativo && 
        <img 
        className="arrazao" 
        src={Arrazao} 
        alt="caracteres que simulam um rosto usando uma coroa e sorrindo"
        /> 
      }

    </button>
  );
};

export default ArrazoSupremo;
