import React, { Component } from "react";
import "./godigital.css"
import svg from "../../images/bank.svg"
import Btn from "../header/getStarted"

class GoDigital extends Component {
    render () {
        return (
            <div className="GoDigital">
                <div className="godigital-main">
                    <div className="godigital-main-leftpane">
                        <img src={svg} alt="" />
                    </div>
                    <div className="godigital-main-rightpane">
                        <div className="godigital-main-rightpane-header">
                            GO DIGITAL NOW!
                        </div>
                        <div className="godigital-main-rightpane-row">
                        Our digital platform allows you to access your money from anywhere, anytime. Which our innovative security features, and first-in-class service, we combine the best of traditional banking with a modern convenience of digital banking today
                        </div>
                        <div className="godigital-main-rightpane-btn">
                            <Btn />
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default GoDigital