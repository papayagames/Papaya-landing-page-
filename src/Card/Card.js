import React from "react";
import "./Card.css";
import illus1 from "../images/illus1.svg";
import illus2 from "../images/illus2.svg";
import illus3 from "../images/illus3.svg";

const Card = () => {
  return (
    <div className="card">
      <h4 className="gametitle">Our Ecosystem</h4>
      <h1 className="cardhead">
        Solving the Gaming Industires biggest Problems
        <span className="hcolor">.</span>
      </h1>
      <p className="carp">
        New Economy for Creators. Freedom for Gamers. No Intermediaries{" "}
      </p>
      <div className="joinedcard">
        <div className="cards">
          <img src={illus1} alt="illus" />
          <h3 className="cardsh3">
            Game <span className="hcolor">Fruit Publisher</span>
          </h3>
          <hr className="chr" />
          <h1 className="cardsh1">
            Publish your game in 5 steps<span className="hcolor">.</span>
          </h1>
          <p className="cardsp">
            papaya.games wants to make the process of releasing games as simple
            as can be. With FruitPublisher we’re able to take the developer's
            journey to the next level.
          </p>
          <button className="cardsbtn">
            CREATE <span className="hcolor">ERC20</span>TOKEN
          </button>
          <h5 className="cardsh5">TESTNET LIVE</h5>
        </div>

        <div className="cards">
          <img src={illus2} alt="illus" />
          <h3 className="cardsh3">
            Game <span className="hcolor">Papaya25</span>
          </h3>
          <hr className="chr" />
          <h1 className="cardsh1">Blockchain explorer for the Gamers.</h1>
          <p className="cardsp">
            Future of gaming social media. Create a stunning profile, add your
            friends and follow influencers. Showcase your collection!
          </p>
          <button className="cardsbtn">EXPLORE</button>
          <h5 className="cardsh5">TESTNET LIVE</h5>
        </div>

        <div className="cards1">
          <img src={illus3} alt="illus" />
          <h3 className="cardsh3">
            Game <span className="hcolor">Fruits Markets</span>
          </h3>
          <hr className="chr" />
          <h1 className="cardsh1">Browse all available games in one place.</h1>
          <p className="cardsp">
            Fruit.Market is the world's first price-tracking website for
            decentralized software licenses. View their current prices and data
            at a glance.
          </p>
          <p className="cardbtn1">SOON</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
