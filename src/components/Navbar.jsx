import React from 'react'
import logo from '../assets/logo.png'
import Hero from './Hero.jsx'
import SearchResult from '../pages/searchresult.jsx'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = ({ input, setinput, onSearch }) => {
    const Location = useLocation();
    const usenav = useNavigate();
    return (
        <header>
            {/* The hidden checkbox that tracks the toggle state */}
            <input type="checkbox" id="menu-toggle" />

            <nav className='navbar'>
                <img onClick={() => usenav('/')} src={logo} alt="logo" />
                <div className='nav-functions'>
                    <input type="text" value={input} onChange={(e) => { setinput(e.target.value) }} />
                    <select name="category">
                        <option >All</option>
                        <option >Men</option>
                        <option >Women</option>
                        <option >Kids</option>
                        <option >Electronics</option>
                        <option >Home & Living</option>
                        <option >Beauty & Personal Care</option>
                        <option >Sports & Outdoors</option>
                        <option >Bags & Accessories</option>
                        <option >Sale</option>
                    </select>
                    <button onClick={onSearch}>Search</button>
                </div>

                {/* The clickable hamburger icon (Label wraps the SVG and links to the checkbox) */}
                <label htmlFor="menu-toggle" className="hamburger-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#E3E3E3">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </label>

                <ul>
                    <li>
                        <i className="fa-solid fa-circle-user"></i>
                        <p>profile</p>
                    </li>
                    <li>
                        <i className="fa-solid fa-message"></i>
                        <p>message</p>
                    </li>
                    <li>
                        <i className="fa-solid fa-heart"></i>
                        <p>Order</p>
                    </li>
                    <li onClick={()=> usenav('/Cart')}>
                        <i className="fa-solid fa-cart-arrow-down"></i>
                        <p>my orders</p>
                    </li>
                </ul>

                <div className="section-inquiry">
                    <div className='section-content'>
                        <h5 onClick={() => usenav('/Hotoffers')}>Hot offers</h5>
                        <h5>Projects</h5>
                        <h5>Menu item</h5>
                        <select defaultValue="" className="support-dropdown">
                            <option value="" disabled>Contact Support</option>
                            <option value="phone">Help: +03258984600</option>
                            <option value="bot">Chat with our bot!</option>
                        </select>
                    </div>

                    <div className='section-langCountry'>
                        <select name="country">
                            <option value="">-- Select Country --</option>
                            <option value="PK">Pakistan</option>
                            <option value="IN">India</option>
                            <option value="US">United States</option>
                            {/* ... remaining country options ... */}
                        </select>
                    </div>
                </div>
            </nav>
            {Location.pathname === '/' && <Hero />}
        </header>
    )
}

export default Navbar