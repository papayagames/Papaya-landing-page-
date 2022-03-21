import React from "react";
import "./Game.css";
import distimg from "../images/distimg.svg"
const Game = () => {
  return (
    <div className="game">
      <h4 className="gametitle">How it works</h4>
      <h1 className="gamehead">
        Layer 2 for <span className="hcolor">Game Distribution</span>
      </h1>
      <p className="gamep">
        Issue your Game as Licence-pegged ERC-20 Token Monetize how you want
        with creating a Game Contract Start playing with our Game Launcher
      </p>
      <img src={distimg} alt="gameimg" className="gameimg" />
    </div>
  );
};

export default Game;
