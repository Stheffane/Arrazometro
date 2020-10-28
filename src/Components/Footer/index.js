import React from "react";
import Input from "../Input";
import BtnRegister from "../BtnRegister";

import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-form">
          <Input name="namePoc" placeholder="Qual o nome da poc?" />
          <Input name="nickPoc" placeholder="A poc tem nick?" />
          <BtnRegister />
        </div>
      </footer>
    </>
  );
};

export default Footer;
