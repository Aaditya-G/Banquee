import React, { Component } from 'react';
import './getStarted.css'
import arrow from '../images/Vector.svg'

class Btn extends Component{
    render(){
        return(
            <div className="btn">
                <div className="text-get-started">
                    GET STARTED
                </div>
                <img src={arrow} alt="" className='first'/>
                <img src={arrow} alt="" className='second'/>
            </div>
        )
    }
}

export default Btn