import React from "react";
import BtnTheme from "../BtnTheme";
import BtnHamburguerMenu from "../BtnHamburguerMenu";

import "./style.css";

import useWindowDimensions from "../../hooks/useWindowDimentions"

const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      <header>
        <h1>Arrazometro das Poc</h1>

        { width >= 870 && <BtnTheme />}

        { width < 870 && <BtnHamburguerMenu />}
        
      </header>
    </>
  );
};

export default Header;
