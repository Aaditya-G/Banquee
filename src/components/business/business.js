import React, { Component } from 'react';
import './business.css'
import svg1 from '../../images/smallBusiness.svg'
import svg2 from '../../images/startups.svg'
import svg3 from '../../images/enterprises.svg'

class Business extends Component{
    render(){
        return(
            <div className="business">
                <div className="business-header">
                    DESIGNED FOR BUSINESS OF ALL SIZES
                </div>
                <div className="business-cardholder">
                    <div className="business-bigcard">
                        <div className="bigcard-img">
                            <img src={svg1} alt="" />
                        </div>
                        <div className="bigcard-text">
                            FOR SMALL BUSINESSES
                        </div>
                    </div>
                    <div className="business-smallcard">
                        <div className="smallcard-img">
                            <img src={svg2} alt="" />
                        </div>
                        <div className="smallcard-text">
                            FOR STARTUPS
                        </div>
                    </div>
                    <div className="business-smallcard">
                        <div className="smallcard-img">
                            <img src={svg3} alt="" />
                        </div>
                        <div className="smallcard-text">
                            FOR ENTERPRISES
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Business