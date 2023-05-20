import './logo.css'
import rect from '../images/logo_rect.svg'
import star from '../images/Star.svg'
import { Component } from 'react'

class Logo extends Component{
    render (){
       return (
        <div className="logo">
        <img src={rect} alt="" className='background' />
        <img src={star} alt="" className='star' />
        <section className='text'>Banquee</section>
     </div>
 )}
       
}
   

export default Logo