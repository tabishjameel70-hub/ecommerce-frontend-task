import React from 'react'
import logo from '../assets/logo.png'
const Navbar =  ({ input, setinput, onSearch }) => {
    return (
        <div>
            <nav className='navbar'>
                <img src={logo} alt="logo" />
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
                    <li>
                        <i className="fa-solid fa-cart-arrow-down"></i>
                        <p>my orders</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar