import React, { Component } from 'react';
import './header.css'
import Hero from '../images/Hero.svg'
import Logo from './Logo'
import Btn from './getStarted'
import CheeseBurger from '../images/Cheeseburger.svg'

class Header extends Component{
    render(){
    return(
        <div className="Header">
            <Logo />
            <Btn />
            <img src={Hero} alt="" className='hero' />
            <img src={CheeseBurger} alt="" className='cheese' />
            <section className='text-1'> EASY WAY TO BANKING</section>
            <section className='text-2'> We give you both the foundation and flexibility to build and grow digital capabilities and deliver customer experiences.</section>
            
        </div>
    )
}
}

export default Header;