import React from 'react'
import card1 from '../assets/furniture card.jpg'
import card2 from '../assets/electronics crad.jpg'

const Productsection = ({ allData,frontData, home, kitcehb }) => {
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
                                    <div className="box4" key={index}>
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

                </div>
            </section>
        </div>
    )
}

export default Productsection