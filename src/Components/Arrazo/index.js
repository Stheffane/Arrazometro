import React, { useState } from "react";
import "./style.css"
import Arrazo from "../../assets/icons/Arrazo.svg";

const Arrazos = (props) => {
  const estilo = `arrazo-wrapper + ${props.cor}`
  const [ativo, setAtivo] = useState(false);

  return (
    <button id="arrazando" className={estilo} onClick={() => setAtivo(!ativo)} >

      { ativo && 
        <img 
        className="arrazo" 
        src={Arrazo} 
        alt="caracteres que simulam um rosto sorrindo"
        />
      }
      
    </button>
  );
};

export default Arrazos;
