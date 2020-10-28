import React, { useState, useEffect } from "react";
import BtnTheme from "../BtnTheme";
import Input from "../Input";

import "./style.css";

const BtnHamburguerMenu = () => {
  const [menuButton, setMenuButton] = useState(false);
  const [showSideBar, setShowSideBar] = useState("sidebar");

  useEffect(() => {
    hadleShowSideBar()
  },[menuButton])

  function hadleShowSideBar() {
    let classCss;

    menuButton ? 
        classCss = "sidebar show" 
      : classCss = "sidebar"

    return ( setShowSideBar(classCss) )
  }

  return (
    <div className="header-icon-menu">
      <button 
        class="menuButton" 
        active={menuButton}
        onClick={() => setMenuButton(!menuButton)}
      >
        { !menuButton ? <i className="menu-icon" /> : <i className="menu-icon active" />}  
      </button>

      <div className={showSideBar}>
        <div className="icon-theme-menu">
          <BtnTheme/>
        </div>
        
        <Input name="namePoc" placeholder="Qual o nome da poc?" />
        <Input name="nickPoc" placeholder="A poc tem nick?" />
        <button className="btn-cadastrar">cadastrar Poc</button>
      </div>      
    </div>
  );
};

export default BtnHamburguerMenu;
