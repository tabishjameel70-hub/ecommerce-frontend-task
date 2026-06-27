import React from 'react'
import Heroimage from '../assets/Banner-board-800x420 2.png'
import { useNavigate } from 'react-router-dom'
const Hero = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="hero-section">
                <div className="hero-menu">
                    <h5 onClick={() => navigate(`/Automobiles`)}>Automobiles</h5>
                    <h5 onClick={() => navigate(`/clothes`)}>Clothes and wear</h5>
                    <h5 onClick={() => navigate(`/home-decor`)}>home and decor</h5>
                    <h5 onClick={() => navigate(`/computer-tech`)}>computer and tech</h5>
                    <h5 onClick={() => navigate(`/tools-equipment`)}>tools equipments</h5>
                    <h5 onClick={() => navigate(`/sports-outdoors`)}>sports and outdoors</h5>
                    <h5 onClick={() => navigate(`/animal-pets`)}>animal and pets</h5>
                    <h5 onClick={() => navigate(`/machinery-tools`)}>machinery tools</h5>
                </div>
                <div className='ccc-extra'>

                    <div className="hero-img">
                        <img src={Heroimage} alt="hero" />
                    </div>
                    <div className='hero-imp'>
                        <div className="login">
                            <div className="login-content">
                                <li><i className="fa-solid fa-circle-user"></i></li>
                            </div>
                            <button>join now</button>
                            <button onClick={() => navigate(`/Login`)}>login</button>
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
        </div>
    )
}

export default Hero