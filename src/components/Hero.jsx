import React from 'react'
import Heroimage from '../assets/Banner-board-800x420 2.png'
const Hero = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="hero-menu">
                    <h5>Automobiles</h5>
                    <h5>Clothes and wear</h5>
                    <h5>home and decor</h5>
                    <h5>computer and tech</h5>
                    <h5>tools equipments</h5>
                    <h5>sports and outdoors</h5>
                    <h5>animal and pets</h5>
                    <h5>machinery tools</h5>
                    <h5>more category</h5>
                </div>
                <div className="hero-img">
                    <img src={Heroimage} alt="hero" />
                </div>
                <div className='hero-imp'>
                    <div className="login">
                        <div className="login-content">
                            <li><i className="fa-solid fa-circle-user"></i></li>
                            <p>hi, user Lets get started!</p>
                        </div>
                        <button>join now</button>
                        <button>login</button>
                    </div>
                    <div className="offers">
                        <p>Get US $10 off with a new supplier</p>
                    </div>
                    <div className="quotes">
                        <p>send a quotes with supplier prefrences</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero