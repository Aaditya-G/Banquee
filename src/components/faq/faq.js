import React, { Component } from 'react';
import './faq.css'
import FaqCard from './faqCard.js';

class Faq extends Component{
    render(){
        return(
            <div className="FAQ">
                <div className="faqheader">
                    FREQUENTLY ASKED QUESTION
                </div>
                <div className="FAQ-cardholder">
                <FaqCard text="HOW MUCH WOULD IT REQUIRE TO OPEN AN ACCOUNT ?" />
                <FaqCard text="Is there a minimum operational cost ?" />
                <FaqCard text="where can i use my debit cards ?" />
                <FaqCard text="how much do i get as interest on savings ?" />
                </div>
             
            </div>
        )
    }
}

export default Faq