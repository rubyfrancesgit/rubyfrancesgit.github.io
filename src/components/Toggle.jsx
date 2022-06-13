import React, { useState, useContext } from "react";
import moonStars from "../assets/moon-stars.svg";
import sun from "../assets/sun.svg";
import { ThemeContext } from "../App";

function Toggle() {
    const { setTheme } = useContext(ThemeContext);

    const toggleMode = () => {
        setTheme((curr) => (curr === "dark" ? "light" : "dark"));
    }

  return (
    <div className="toggle">
      <div className="toggle__div" onClick={toggleMode}>
          <p className="toggle__moon-emoji">🌝</p>
          <p className="toggle__sun-emoji">🌞</p>
      </div>
    </div>
  )
}

export default Toggle
