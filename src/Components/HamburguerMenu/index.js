import React from "react";
import Input from "../Input";
import BtnTheme from "../BtnTheme";

import "./style.css";

const HamburguerMenu = () => {
  return(
    <section className="container-menu">
      <IconCloseMenu />

      <div className="body-menu">
        <BtnTheme />

        <Input name="namePoc" placeholder="Qual o nome da poc?" />
        <Input name="nickPoc" placeholder="A poc tem nick?" />
        
        <button className="btn-cadastrar">cadastrar Poc</button>
      </div>
    </section>
  )
}

export default HamburguerMenu;