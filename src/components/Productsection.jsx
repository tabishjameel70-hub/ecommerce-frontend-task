import React from 'react'
import card1 from '../assets/furniture card.jpg'
import card2 from '../assets/electronics crad.jpg'
import card3 from '../assets/image 98.png'
import frontCard from '../assets/Group 982.png'
const Productsection = ({ frontData, home, kitcehb, TechData, loading }) => {
    return (
        <div>
            <section>
                {loading ? <h5>Loading....</h5> :
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
                                        <div className='box2' key={index}>
                                            <img src={p.image} alt={p.title} />
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
                                        <div className="box3" key={index}>
                                            <img src={p.thumbnail} alt={p.title} />
                                            <p>{p.title}</p>
                                            <p>${p.price}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className='section2'>
                                    {home?.map((p, index) => (
                                        <div className="box3" key={index}>
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
                                        <div className='box2' key={index}>
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
                                <div>
                                    <h5>An easy way to send request to all suppliers</h5>
                                    <p>Lorem ipsum. Lorem,sectetptatum, consectetur. Vel, quos?!</p>
                                </div>
                                <div className='card-holder'>
                                    <div className='card-content'>
                                        <h2>send request to suppliers</h2>
                                        <option name="what item you need?">
                                            <option >Men</option>
                                            <option >Women</option>
                                            <option >Kids</option>
                                            <option >Electronics</option>
                                            <option >Home & Living</option>
                                            <option >Beauty & Personal Care</option>
                                            <option >Sports & Outdoors</option>
                                            <option >Bags & Accessories</option>
                                        </option>
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
                    </div>
                }
            </section>
        </div>
    )
}

export default Productsection