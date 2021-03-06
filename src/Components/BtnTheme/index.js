import React from "react";

import "./style.css";

const BtnTheme = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const darkModeStorage = localStorage.getItem("dark-mode");
    const html = document.querySelector("html");
    const inputDarkMode = document.getElementById("theme");

    if (darkModeStorage) {
      html.setAttribute("dark", "true");
    }

    inputDarkMode.addEventListener("change", () => {
      if (inputDarkMode.checked) {
        html.setAttribute("dark", "true");
        localStorage.setItem("dark-mode", true);
      } else {
        html.removeAttribute("dark");
        localStorage.removeItem("dark-mode");
      }
    });
  });

  return (
    <div className="header-icon-theme">
      <label htmlFor="theme">
        <div className="icon-theme" />
      </label>
      <input id="theme" type="checkbox" className="input-dark-mode" />
    </div>
  );
};

export default BtnTheme;
