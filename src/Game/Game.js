import React from "react";
import "./Game.css";
import distimg from "../images/distimg.svg";
import Card from "../Card/Card";
import coins from "../images/coins.svg";
import More from "../More/More";
import bigdash2 from "../images/bigdash2.svg";
import dash3 from "../images/dash3.svg";
import dash4 from "../images/dash4.svg";
import dashimg from "../images/dashimg.svg";

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

      <Card />

      <h4 className="gametitle">Game Token</h4>
      <h1 className="gamehead">
        1 Token <span className="hcolor">=</span> 1 Video Game
        <span className="hcolor">.</span> Buy<span className="hcolor">2</span>
        Play
      </h1>
      <p className="gamep">
        Game Token with a video game on the Blockchain. You must have one piece
        of the game to play. Freely shape the rules of the secondary market as a
        Game Creator. Liquidity pools with video games!
      </p>
      <img src={coins} alt="gameimg" className="gameimg" />
      <button className="gamebtn">FIND OUT MORE ABOUT GAME TOKEN</button>

      <More name={dashimg} />

      <h4 className="gametitle">
        Fruit<span className="hcolor">Wallet</span>
      </h4>
      <h1 className="gamehead">
        Store your<span className="hcolor"> games</span> where you own them
        <span className="hcolor">!</span>
      </h1>
      <p className="gamep">
        Imagine if gamers were to decide the pricing of games! Buy a game, play
        a game, borrow a game, sell a game. With us, you will finally own the
        games!
      </p>
      <button className="gamebtn2">
        MORE ABOUT <span className="hcolor">FRUITWALLET</span>
      </button>
      <img src={bigdash2} alt="gameimg" className="gameimg1" />

      <div className="more">
        <div className="morecon">
          <div className="firstmore">
            <h4 className="moreh4">
              papaya<span className="hcolor">25</span>
            </h4>
            <h1 className="moreh1">Social Media meets Stream</h1>
            <p className="morep">
              View Player Transactions, their items and NFTs. Take pride in your
              game collection and interact with other Users. Interact directly
              with Game Communites and Creators. DAO based Community Votings on
              Games.
            </p>
            <button className="morebtn">MORE ABOUT PAPAYA25</button>
          </div>
          <img src={dash3} alt="moreimg" className="moreimg2" />
        </div>
      </div>

      <h4 className="gametitle">
        Game<span className="hcolor">Contract</span>.io
      </h4>
      <h1 className="gamehead">
        Publish your game by creating GameContract
        <span className="hcolor">!</span>
      </h1>
      <p className="gamep">
        Publish games without middlemen with the help of GameContract.io in 5
        minutes. Create Tokens on the blockchain in the Smart Contracts factory!
      </p>
      <button className="gamebtn2">
        MORE ABOUT <span className="hcolor">GAMECONTRACT</span>
      </button>
      <img src={dash4} alt="gameimg" className="gameimg2" />

      <h1 className="gamehead">
        <span className="hcolor">DeFinitive </span>Edition of Video Game Market
      </h1>

      
    </div>
  );
};

export default Game;
