import React from "react";
import "./Lead.css";
import metamask from "../images/metamask.svg"
import  savebtn from "../images/savebtn.svg"

const lead = () => {
  return (
    <div className="leads">
      <div className="leadscon">
        <div className="lead1">
          <h1 className="leads1h1">
            Join our Discord Community and get Early Supporter Rewards
          </h1>
          <button className="leads1btn">Join Discord</button>
        </div>
        <div className="lead2">
          <div className="leads2h3">Get whitelisted</div>
          <div className="leads2p">
            here we have some alpha for you ;)
          </div>
          <div className="leadsinput">
            <form>
              <input type="text" placeholder="enter email address" />
            </form>
            <img src={savebtn} alt="inputimg" className="inputimg" />
          </div>
          <div className="leadsdiv">
            <p className="inputp2">
              Connect to metamask first to access referral options
            </p>
            <img src={metamask} alt="metamask" className="metamask" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default lead;
