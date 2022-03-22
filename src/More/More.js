import React from "react";
import "./More.css"
// import dashimg from "../images/dashimg.svg"

const More = (props) => {
  return (
    <div className="more">
      <div className="morecon">
        <div className="firstmore">
          <h4 className="moreh4">
            Fruit<span className="hcolor">.Market</span>
          </h4>
          <h1 className="moreh1">
            Videos Game Market Cap Listing<span className="hcolor">.</span>
          </h1>
          <p className="morep">
            Imagine CoinMarketCap with video games that lets you list their
            prices. Ranking games based on their true value! Nothing shows the
            quality of a game better than its true price.
          </p>
          <button className="morebtn">MORE ABOUT <span className="hcolor">GAMECAP</span></button>
        </div>
        <img src={props.name} alt="moreimg" className="moreimg" />
      </div>
    </div>
  );
};

export default More;
