import React from "react";
import "./trust.css";

// class Card extends Component() {
//   render() {
//     return (
//       <div className="trust-card">
//         <div className="trust-card-header">{props.header}</div>
//         <div className="trust-card-content">{props.content}</div>
//         <div className="trust-card-svg"><img src={props.svg} alt="" /></div>
//       </div>
//     );
//   }
// }

const Card = (props) => {
  return (
    <div className="trust-card">
      <div className="trust-card-header">{props.header}</div>
      <div className="trust-card-content">{props.content}</div>
      <div className="trust-card-svg">
        <img src={props.svg} alt="" />
      </div>
    </div>
  );
};

export default Card;
