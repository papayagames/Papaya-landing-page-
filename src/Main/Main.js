import React from "react";
import "./Main.css";
import brands from "../images/brands.svg";
import telegram from "../images/telegram.svg";
import discord from "../images/Discord.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/Linkedin.svg";
import rightarrow from "../images/rightarrow.svg";
import shortc from "../images/shortc.svg"

const Main = () => {
  return (
    <div className="main">
      <div className="mainfirst">
        <p className="mainp">CUTTING-EDGE TECHNOLOGIES</p>
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

      <div className="mainsecond">
        <h3 className="mainech5">
          <span className="hcolor">ROADMAP</span>
        </h3>
        <p className="mainsecp1">The next steps of our mission</p>
        <div className="mainseccon">
          <div className="mainthird">
            <hr className="thhr" />
            <h4 className="mainthirdh4">Q1-Q2 2022</h4>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">MVP on BSC & Polygon</p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">partnerships</p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">strategic fundraising</p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">Going live</p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">publishing first indie game</p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">MVP testing</p>
            </div>
          </div>

          <div className="mainthird">
            <hr className="thhr" />
            <h4 className="mainthirdh4">Q3-Q4 2022</h4>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">
                Desktop Game Launcher Live for all major OS (Windows, iOS,
                Android..)
              </p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">Fiat = Crypto Ramp</p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">Unity, Unreal Engine HashUp plugins</p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">Growing the Papaya Ecosystem</p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">
                Onboarding campaign for Gaming Studios and Creators
              </p>
            </div>
          </div>

          <div className="mainthird">
            <hr className="thhr" />
            <h4 className="mainthirdh4">2023</h4>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">Papaya on Solana</p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">
                GamePaper.io - Kickstarter for Computer Games on Blockchain
              </p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">
                Fruit.Markets - First DEX for computer games (secondary market)
              </p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">
                KickOff of for (non-game) Software Publisher
              </p>
            </div>
          </div>

          <div className="mainthird">
            <hr className="thhr" />
            <h4 className="mainthirdh4">from 2024</h4>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">
                Biggest Game Publisher in Web3 As the Industry shifts towards
                Web3, its just a matter of time until AAA Games will publish in
                Web3 ... they will do it with us
              </p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">
                Going on mobile devices ... as major obstacles of cryptos mobile
                UX and therefore its large adoption will improve, we will bring
                true ownership on your mobile device
              </p>
            </div>
            <div className="pcont">
              <img src={shortc} alt="short" className="pcontimg" />
              <p className="mthirdp">
                Developing concepts of decentralized consoles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
