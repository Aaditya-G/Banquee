import React, { Component } from 'react';
import './trust.css'
import Card from './card';
import pfp1 from '../../images/pfp-1.svg'
import pfp2 from '../../images/pfp-2.svg'

class Trust extends Component{
    render(){
        const H1 = "SUPER USER-FRIENDLY";
        const C1 = "The UI is so intuitive that anyone can use it, without any knowledge on the system & I love the financial reports. The tool automatically organizes all data and gives us clarity on spend."
        const H2 = "SAVED HOURS EVERY WEEK!"
        const C2 = "I have been saved so much time on tax calculations. And it gives me reliable projections.I love the financial reports. The tool automatically organizes all data and gives us clarity on spend."

        return(
            <div className="Trust">
                <div className="trust-header">
                    TRUSTED BY PEOPLE ALL OVER THE WORLD
                </div>
                <div className="trust-main">
                    <div className="trust-main-card">
                        <Card header={H1} content={C1} svg={pfp1} name="WILLIAM TROMP" position="CTO - Gislason and Sons"/>
                    </div>
                    <div className="trust-main-card">
                        <Card header={H2} content={C2} svg={pfp2} name="REBECCA EMARD" position="Founder - Conn Inc" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Trust