import "./header.css";
import rect from "../../images/logo_rect.svg";
import star from "../../images/Star.svg";
import { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <div className="logo-star">
          <img src={star} alt="" className="star" />
        </div>
        <div className="logo-text">Banquee</div>
      </div>
    );
  }
}

export default Logo;
