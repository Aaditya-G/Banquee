import React, { Component } from 'react';
import './godigital.css'
import arrow from '../../images/vectorBlack.svg'

class Btn extends Component{
    render(){
        return(
            <div className="godigital-btn">
                <div className="godigital-text-get-started">
                    GET STARTED
                </div>
                <div className="arrows">
                <img src={arrow} alt="" className='first'/>
                <img src={arrow} alt="" className='second'/>
                </div>
                
            </div>
        )
    }
}

export default Btn