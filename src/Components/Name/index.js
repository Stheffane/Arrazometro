import React, { useState, useEffect } from "react";
import "./style.css";

const Name = (props) => {
  const pocArrazou = false;
  const [supremo, setSupremo] = useState("name");

  useEffect(() => {
    changeEstilo();
  });

  function changeEstilo() {
    pocArrazou
      ? setSupremo("name poc-arrazada")
      : setSupremo("name poc-arrazando");
  }

  return <h2 className={supremo}>{props.nome}</h2>;
};

export default Name;
