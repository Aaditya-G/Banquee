import React, { Component } from "react";
import "./features.css";
import secure from "../../images/secure.svg"
import automatic from "../../images/automatic.svg"
import hidden from "../../images/hidden.svg"
import card from "../../images/card.svg"

class Features extends Component {
  render() {
    return (
      <div className="Features">
        <div className="feature-main">
          <div className="feature-main-header">
            ALL FEATURES YOU NEED IN ONE PLACE
          </div>
          <div className="feature-main-content">
          <div className="feature-main-row">
            <div className="purple-card">
              <div className="purple-card-image">
                <img src={secure} alt="" />
              </div>
              <div className="pruple-card-text">Secure Online Banking</div>
            </div>
            <div className="orange-card">
              <div className="orange-card-image">
                <img src={automatic} alt="" />
              </div>
              <div className="orange-card-text">
                Automatic Bill Payment</div>
            </div>
          </div>
          <div className="feature-main-row">
            <div className="orange-card">
              <div className="orange-card-image">
                <img src={hidden} alt="" />
              </div>
              <div className="orange-card-text">No Hidden Fees</div>
            </div>
            <div className="purple-card">
              <div className="purple-card-image">
                <img src={card} alt="" />
              </div>
              <div className="pruple-card-text">Card Payments Anytime</div>
            </div>
          </div>
          </div>
         
        </div>
      </div>
    );
  }
}

export default Features
