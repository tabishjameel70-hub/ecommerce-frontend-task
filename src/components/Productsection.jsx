import { useNavigate } from 'react-router-dom'
import {useState } from 'react';
import card1 from '../assets/furniture card.jpg'
import card2 from '../assets/electronics crad.jpg'
import card3 from '../assets/image 98.png'
import frontCard from '../assets/Group 982.png'
import b1 from '../assets/Mask group.png'
import b2 from '../assets/Mask group (1).png'
import b3 from '../assets/image 106.png'
import b4 from '../assets/image 107 (1).png'
const Productsection = ({ frontData, home, kitcehb, TechData, loading, clothing, decore}) => {
    const [currentview, setcurrentview] = useState('home');
    const navigate = useNavigate();
    return (
        <div>
            <section>
                <div className='main-content'>
                    <div className="front-products1">
                        <div className="product-card" >
                            <img src={card1} alt="card1" />
                            <h3>Home and decore</h3>
                            <button>source now</button>
                        </div>
                        <div>
                            <div className='section1'>
                                {frontData?.map((p, index) => (
                                    <div className='box2'onClick={()=> navigate(`/productdetails/${p.id}`)}  key={index}>
                                        <img src={p.thumbnail} alt={p.title} />
                                        <p>{p.title}</p>
                                        <p>{p.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className='front-products2'>
                        <div className="product-card">
                            <img src={card2} alt="card2" />
                            <h3>Home and decore</h3>
                            <button>source now</button>
                        </div>
                        <div>
                            <div className="section3">
                                {kitcehb?.map((p, index) => (
                                    <div className="box3" onClick={()=> navigate(`/productdetails/${p.id}`)}  key={index}>
                                        <img src={p.thumbnail} alt={p.title} />
                                        <p>{p.title}</p>
                                        <p>${p.price}</p>
                                    </div>
                                ))}
                            </div>

                            <div className='section2'>
                                {home?.map((p, index) => (
                                    <div className="box3" onClick={()=> navigate(`/productdetails/${p.id}`)}  key={index}>
                                        <img src={p.thumbnail} alt={p.title} />
                                        <p>{p.title}</p>
                                        <p>${p.price}</p>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>
                    <div className="front-product3">
                        <div className="product-card">
                            <img src={card3} alt="card3" />
                            <h3>Home and decore</h3>
                            <button>source now</button>
                        </div>
                        <div>
                            <div className='section1'>
                                {TechData?.map((p, index) => (
                                    <div className='box2' onClick={()=> navigate(`/productdetails/${p.id}`)}  key={index}>
                                        <img src={p.thumbnail} alt={p.title} />
                                        <p>{p.title}</p>
                                        <p>{p.price}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="front-card">
                        <div className="front-img">
                            <img src={frontCard} alt="frontcard" />
                            <div className='sec1'>
                                <h5>An easy way to send request to all suppliers</h5>
                                <p>Lorem ipsum. Lorem,sectetptatum, consectetur. Vel, quos?!</p>
                            </div>
                            <div className='sec2'>
                                <h2>send request to suppliers</h2>
                                <div className='card-content'>
                                    <select name="what item you need?">
                                        <option >Men</option>
                                        <option >Women</option>
                                        <option >Kids</option>
                                        <option >Electronics</option>
                                        <option >Home & Living</option>
                                        <option >Beauty & Personal Care</option>
                                        <option >Sports & Outdoors</option>
                                        <option >Bags & Accessories</option>
                                    </select>
                                    <textarea name="details" placeholder='enter more details..'></textarea>
                                    <select name="Quantity">
                                        {Array.from({ length: 100 }, (_, i) => i + 2).map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                    <button>send inquiry</button>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="front-product4">
                        <h2>Recommend item</h2>
                        <div className="section4">
                            {clothing?.map((p, index) => (
                                <div className='box2' onClick={()=> navigate(`/productdetails/${p.id}`)}  key={index}>
                                    <img src={p.thumbnail} alt={p.title} />
                                    <p>{p.title}</p>
                                    <p>${p.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="front-product5">
                        <div className="section5">
                            {decore?.map((p, index) => (
                                <div className='box2' onClick={()=> navigate(`/productdetails/${p.id}`)}  key={index}>
                                    <img src={p.thumbnail} alt={p.title} />
                                    <p>{p.title}</p>
                                    <p>${p.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="extraservice-card">
                        <h4>Our Extra Services</h4>
                        <div className='container'>
                            <div className="b1">
                                <img src={b1} alt="Mask group" />
                                <i className="fa-solid fa-search-icon"></i>
                                <h5>source from industry hubs!</h5>
                            </div>
                            <div className="b1">
                                <img src={b2} alt="Mask group" />
                                <i className="fa-solid fa-search-icon"></i>
                                <h5>customize your products!</h5>
                            </div>
                            <div className="b1">
                                <img src={b3} alt="Mask group" />
                                <i className="fa-solid fa-search-icon"></i>
                                <h5>fast reliable shipping by ocean or air!</h5>
                            </div>
                            <div className="b1">
                                <img src={b4} alt="Mask group" />
                                <i className="fa-solid fa-search-icon"></i>
                                <h5>product monitoring and inspection!</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Productsection