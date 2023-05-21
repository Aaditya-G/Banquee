import React from 'react';
import './footer.css'
import svg from '../../images/Star4.svg'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="footer-main">
                    <div className="footer-row1">
                        <div className="footer-text">
                            SUBSCRIBE TO OUR NEWSLETTER FOR A 10% BONUS ON TRANSACTIONS
                        </div>
                        <div className="footer-svg">
                            <img src={svg} alt="" />
                        </div>
                    </div>
                    <div className="footer-row2">
                        <div className="footer-textbox">
                            <input type="email" name="" id="textbox" placeholder='Your email address' />
                        </div>
                        <div className="footer-button">
                            SUBSCRIBE
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer