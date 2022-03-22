import React from "react";
import "./Main.css";
import brands from "../images/brands.svg";
import telegram from "../images/telegram.svg"
import discord from "../images/Discord.svg"
import twitter from "../images/twitter.svg"
import linkedin from "../images/Linkedin.svg"
import rightarrow from "../images/rightarrow.svg"

const Main = () => {
  return (
    <div className="main">
      <div className="mainfirst">
        <p className="mainp">Cutting-edge technologies</p>
        <h3 className="mainhs">
          <span className="hcolor">Technologies we use</span>
        </h3>
        <img src={brands} alt="mainimg" className="mainimg" />
        <div className="mainfirstdiv">
          <div className="mcons">
            <div className="mcons2">
              <img src={telegram} alt="" className="mimgcons" />
              <div className="mnames">
                <h3 className="mainh3">Telegram</h3>
                <p className="mh3p">Annoucements</p>
              </div>
            </div>
            <img src={rightarrow} alt="arrow" className="rightarrow" />
          </div>

          <div className="mcons">
            <div className="mcons2">
              <img src={discord} alt="" className="mimgcons" />
              <div className="mnames">
                <h3 className="mainh3">Discord</h3>
                <p className="mh3p">Annoucements</p>
              </div>
            </div>
            <img src={rightarrow} alt="arrow" className="rightarrow" />
          </div>

          <div className="mcons">
            <div className="mcons2">
              <img src={twitter} alt="" className="mimgcons" />
              <div className="mnames">
                <h3 className="mainh3">Twitter</h3>
                <p className="mh3p">Annoucements</p>
              </div>
            </div>
            <img src={rightarrow} alt="arrow" className="rightarrow" />
          </div>

          <div className="mcons">
            <div className="mcons2">
              <img src={linkedin} alt="" className="mimgcons" />
              <div className="mnames">
                <h3 className="mainh3">Linkedin</h3>
                <p className="mh3p">Annoucements</p>
              </div>
            </div>
            <img src={rightarrow} alt="arrow" className="rightarrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
