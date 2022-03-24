import React from "react";
import "./Last.css";
import logo from "../images/logo.svg"

const Last = () => {
    return (
      <div className="last">
        <div className="lastcon">
          <p className="lastp2">Copyright © 2021 by papaya.games. All Rights Reserved. </p>
          <div className="lastdiv">
            <img src={logo} alt="logo" className="lasth1"/>
            <p className="lastp2">Terms & conditions</p>
            <p className="lastp2">Privacy Policy</p>
            <p className="lastp2">CookiesPolicy</p>
          </div>
        </div>
      </div>
    );
};

export default Last;
