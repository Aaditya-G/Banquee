import React, { Component } from "react";
import "./sponsor.css";
import svg from "../../images/sponsor.svg"

class Sponsors extends Component{
    render(){
        return (
            <div className="sponsor">
                <div className="sponsor-img">
                    <img src={svg} alt="" />
                </div>
            </div>
        )
    }
}

export default Sponsors