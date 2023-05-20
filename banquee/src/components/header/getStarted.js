import React, { Component } from 'react';
import './header.css'
import arrow from '../../images/Vector.svg'

class Btn extends Component{
    render(){
        return(
            <div className="btn">
                <div className="text-get-started">
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