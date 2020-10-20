import React from "react";
import Input from "../Input";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-form">
          <Input name="namePoc" placeholder="Qual o nome da poc?" />
          <Input name="nickPoc" placeholder="A poc tem nick?" />
          <button className="btn-cadastrar">cadastrar Poc</button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
