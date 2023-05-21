import React, { Component } from 'react';
import './personally.css'
import svg from '../../images/mobile.svg'

class Personally extends Component{
    render(){
        return(
            <div className="personally">
                 <div className="per-header">
                        WE TAKE BANKING PERSONALLY
                </div>
                <div className="per-main">
                   
                    <div className="per-leftpane">
                        <div className="per-row-1">
                            <div className="per-row-header">
                                SAVE
                            </div>
                            <div className="per-row-content">
                            We're using technology to solve that by automating saving. You set an amount to save and we takes care of the rest, prompt interest payout included.
                            </div>
                        </div>
                        <div className="per-row-1">
                            <div className="per-row2-header">
                                SPEND
                            </div>
                            <div className="per-row-content">
                            We give you more than one way to pay easily, including a widely accepted debit card issued in partnership with Visa, quick web payments direct from your account.
                            </div>
                        </div>
                        <div className="per-row-1">
                            <div className="per-row-header">
                                SEND
                            </div>
                            <div className="per-row-content">
                            From international transfers to on-the-spot payments at market stalls, we’ve simplified sending money so you don’t need to think too much about it.
                            </div>
                        </div>
                    </div>
                    <div className="per-rightpane">

                        <img src={svg} alt="" id="mobile-img" />
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Personally