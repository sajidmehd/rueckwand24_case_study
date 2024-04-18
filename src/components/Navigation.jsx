import React from "react";
import logo from "../assets/images/logo.svg";
function Navigation() {
  return (
    <>
      <div className="navigation">
        <div className="logo">
          <div className="image">
            <img src={logo} alt="Rueckwand24" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
