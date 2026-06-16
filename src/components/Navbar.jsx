import React from 'react'
import logo from '../assets/logo.png'
import Heroimage from '../assets/Banner-board-800x420 2.png'
const Navbar = ({ input, setinput, onSearch }) => {
    return (
        <header>
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
                <div className="section-inquiry">
                    <div className='section-content'>
                        <h5>Hot offers</h5>
                        <h5>Gift boxes</h5>
                        <h5>Projects</h5>
                        <h5>Menu item</h5>
                        <select>
                            <option> help + 03258984600</option>
                            <option>chat with our bot!</option>
                        </select>
                    </div>

                    <div className='section-langCountry'>

                        <select name="country">
                            <option value="">-- Select Country --</option>
                            <option value="PK">Pakistan</option>
                            <option value="IN">India</option>
                            <option value="US">United States</option>
                            <option value="GB">United Kingdom</option>
                            <option value="CN">China</option>
                            <option value="JP">Japan</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="IT">Italy</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="BR">Brazil</option>
                            <option value="RU">Russia</option>
                            <option value="KR">South Korea</option>
                            <option value="MX">Mexico</option>
                            <option value="ID">Indonesia</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="TR">Turkey</option>
                            <option value="NL">Netherlands</option>
                            <option value="ES">Spain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="NG">Nigeria</option>
                            <option value="EG">Egypt</option>
                            <option value="PH">Philippines</option>
                            <option value="PL">Poland</option>
                            <option value="SE">Sweden</option>
                            <option value="AR">Argentina</option>
                            <option value="TH">Thailand</option>
                            <option value="VN">Vietnam</option>
                            <option value="ZA">South Africa</option>
                            <option value="MY">Malaysia</option>
                            <option value="SG">Singapore</option>
                            <option value="AE">UAE</option>
                            <option value="CO">Colombia</option>
                            <option value="CH">Switzerland</option>
                            <option value="CL">Chile</option>
                            <option value="BE">Belgium</option>
                            <option value="NO">Norway</option>
                            <option value="AT">Austria</option>
                            <option value="IR">Iran</option>
                            <option value="DK">Denmark</option>
                            <option value="FI">Finland</option>
                            <option value="NZ">New Zealand</option>
                            <option value="PT">Portugal</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="HU">Hungary</option>
                            <option value="RO">Romania</option>
                            <option value="GR">Greece</option>
                            <option value="IL">Israel</option>
                            <option value="IQ">Iraq</option>
                            <option value="UA">Ukraine</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="QA">Qatar</option>
                            <option value="KW">Kuwait</option>
                            <option value="MA">Morocco</option>
                            <option value="DZ">Algeria</option>
                            <option value="TN">Tunisia</option>
                            <option value="LY">Libya</option>
                            <option value="ET">Ethiopia</option>
                            <option value="KE">Kenya</option>
                            <option value="GH">Ghana</option>
                            <option value="TZ">Tanzania</option>
                            <option value="UG">Uganda</option>
                            <option value="CM">Cameroon</option>
                            <option value="CI">Ivory Coast</option>
                            <option value="SN">Senegal</option>
                            <option value="AO">Angola</option>
                            <option value="MZ">Mozambique</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                            <option value="PE">Peru</option>
                            <option value="VE">Venezuela</option>
                            <option value="EC">Ecuador</option>
                            <option value="BO">Bolivia</option>
                            <option value="PY">Paraguay</option>
                            <option value="UY">Uruguay</option>
                            <option value="CR">Costa Rica</option>
                            <option value="GT">Guatemala</option>
                            <option value="HN">Honduras</option>
                            <option value="SV">El Salvador</option>
                            <option value="NI">Nicaragua</option>
                            <option value="PA">Panama</option>
                            <option value="CU">Cuba</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="HT">Haiti</option>
                            <option value="JM">Jamaica</option>
                            <option value="SK">Slovakia</option>
                            <option value="HR">Croatia</option>
                            <option value="RS">Serbia</option>
                            <option value="BG">Bulgaria</option>
                            <option value="SI">Slovenia</option>
                            <option value="LT">Lithuania</option>
                            <option value="LV">Latvia</option>
                            <option value="EE">Estonia</option>
                            <option value="BY">Belarus</option>
                            <option value="LB">Lebanon</option>
                            <option value="JO">Jordan</option>
                            <option value="SY">Syria</option>
                            <option value="YE">Yemen</option>
                            <option value="OM">Oman</option>
                            <option value="BH">Bahrain</option>
                        </select>
                    </div>
                </div>
            </nav>

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
        </header>
    )
}

export default Navbar