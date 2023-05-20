import React, { Component } from "react";
import "./header.css";
import Hero from "../../images/Hero.svg";
import Logo from "./Logo";
import Btn from "./getStarted";
import CheeseBurger from "../../images/Cheeseburger.svg";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="header-main">
        <div className="header-logo">
          <Logo />
        </div>
        <img src={CheeseBurger} alt="" className="cheese-image" />

        <div className="header-content">
          <div className="header-content-leftpane">
            <section className="text-1"> EASY WAY TO BANKING</section>
            <section className="text-2">
              {" "}
              We give you both the foundation and flexibility to build and grow
              digital capabilities and deliver customer experiences.
            </section>
            <Btn />
          </div>
          <div className="header-content-rightpane">
            <img src={Hero} alt="" className="hero" />
          </div>
        </div>
        </div>
        <div className="disclaimer">Please view in your monitor</div>
      </div>
    );
  }
}

export default Header;
