import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg"
import facebook from "../images/facebook.svg"
import linkedin from "../images/Linkedin.svg"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.svg"
import telegram from "../images/telegram.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footercon">
        <div className="footerfirst">
          <img src={logo} alt="logo" className="footerimg1" />
          <p className="footerp">
            papaya<span className="hcolor">.games</span>-- Publish your game in
            just 15mins.
          </p>
          <div className="gridcon">
            <div className="grid">
              <h2 className="gridh21">WE ARE A REMOTE TEAM LOCATED IN</h2>
              <p className="gridp">Warsaw, Poland </p>
              <p className="gridp">Katowice, Poland </p>
              <p className="gridp">Berlin, Germany</p>
              <p className="gridp"> Frankfurt (Main), Germany</p>
              <p className="gridp">Germany Lisbon, Portugal</p>
            </div>

            <div className="grid">
              <h2 className="gridh21">PAPAYA.GAMES</h2>
              <p className="gridp">Team</p>
              <p className="gridp">Media</p>
              <p className="gridp">Career</p>
            </div>

            <div className="grid">
              <h2 className="gridh21">FOR CREATORS</h2>
              <p className="gridp">Doc</p>
              <p className="gridp">Whitepaper</p>
              <p className="gridp">Saknci</p>
            </div>

            <div className="grid">
              <h2 className="gridh21">SUPPORT</h2>
              <p className="gridp">FAQ</p>
              <p className="gridp">Help center</p>
              <p className="gridp">Support</p>
            </div>
          </div>
        </div>

        <div className="footersecond">
          <div className="fseconddiv">
            <p className="gridh2">
              OUR <span className="hcolor">SOCIAL MEDIA</span>
            </p>
            <div className="ficons">
              <img src={facebook} alt="" className="fsicons" />
              <img src={linkedin} alt="" className="fsicons" />
              <img src={instagram} alt="" className="fsicons" />
              <img src={twitter} alt="" className="fsicons" />
              <img src={telegram} alt="" className="fsicons" />
            </div>
          </div>
          <div className="fseconddiv2">
            <h1 className="gridh2">
              <span className="hcolor">SUBSCRIBE </span>TO THE NEWSLETTER.
            </h1>
            <p className="div2p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="seconddiv2con">
              <form>
                <input type="text" placeholder="Your email address" />
              </form>
              <button className="leads1btn">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
