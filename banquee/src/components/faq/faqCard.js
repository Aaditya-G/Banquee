import React from 'react';
import './faq.css'
import svg from '../../images/circleAdd.svg'

const FaqCard = (props) => {
    return(
        <div className="faq-card">
            <div className="faq-card-text">
                {props.text}
            </div>
            <div className="faq-card-image">
                <img src={svg} alt="" />
            </div>
        </div>
    )
}

export default FaqCard