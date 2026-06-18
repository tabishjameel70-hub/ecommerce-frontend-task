import React, { useState } from 'react'
import Productsection from '../components/Productsection'
import Accessories from './accessories.jsx'
import Electronics from './electronics.jsx'
import Smartphones from './Smartphones.jsx'
import Oppo from './Oppo.jsx'
import Apple from './Apple.jsx'
import Realme from './Realme.jsx'
const SearchResult = ({ filterproduct, loading, input, access, electronicsData, smart, oppoData, appleData, realmeData }) => {
    const [currentView, setcurrentView] = useState('search')
    return (
        <>
            {input ? (
                <div className='search'>
                    <aside>
                        <div className="category">
                            <h3>category</h3>
                            <button onClick={() => setcurrentView('Accessories')} >mobile accesorry</button>
                            <button onClick={() => setcurrentView('Electronics')}>electronics</button>
                            <button onClick={() => setcurrentView('Smartphones')}>smart phones</button>
                        </div>
                        <div className="brands">
                            <div className="category">
                                <h3>Brands</h3>
                                <label onClick={() => { return setcurrentView('Oppo') }}>
                                    <input type="checkbox" />
                                    Oppo
                                </label>
                                <label onClick={() => { return setcurrentView('Apple') }}>
                                    <input type="checkbox" />
                                    Apple
                                </label>
                                <label onClick={() => { return setcurrentView('Realme') }}>
                                    <input type="checkbox" />
                                    Realme
                                </label>
                            </div>
                        </div>
                        {/* <div className="features">
                            <div className="category">
                                <h3>Features</h3>
                                <label>
                                    <input type="checkbox" />
                                    metallic
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    platic cover
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    8gb ram
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    super power
                                </label>
                                <label>
                                    <input type="checkbox" />
                                    large memory
                                </label>
                            </div>
                        </div> */}
                        <div className="price">
                            <h3>price range</h3>
                            <input
                                type="range"
                                id="volume"
                                min="0"
                                max="1000"
                                step="1"
                            />
                            <div>
                                <h6>Min</h6>
                                <div>
                                    <input type="text" placeholder='0'  />
                                    <h6>Max</h6>
                                    <input type="text" placeholder='9999'  />
                                </div>
                            </div>
                            <button>Apply</button>
                        </div>
                        <div className="ratings">
                            <div className="rating-filter">
                                <p className="rating-title">Rating</p>

                                {[5, 4, 3, 2, 1].map(rating => (
                                    <label key={rating} className="rating-row">
                                        <input type="checkbox" className="rating-checkbox" />
                                        <span className="stars-filled">{"★".repeat(rating)}</span>
                                        <span className="stars-empty">{"★".repeat(5 - rating)}</span>
                                        <span className="rating-number">{rating}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </aside>
                    <main >
                        {/* Conditional Rendering switches the content based on state */}
                        {currentView === 'search' && <div>
                            {loading && <p>Loading...</p>}
                            {filterproduct?.length === 0
                                ? <p>No products found.</p>
                                : filterproduct?.map((p, index) => (
                                    <div className="result" key={index}>
                                        <img src={p.thumbnail} alt={p.title} />
                                        <div className='result-info'>
                                            <h2>{p.title}</h2>
                                            <h3>${p.price}</h3>
                                            <p>🏷️ {p.discountPercentage}% off</p>
                                            <p>{'⭐'.repeat(Math.round(p.rating))}</p>
                                            <p>{p.description}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>}
                        {currentView === 'Accessories' && <Accessories access={access} />}
                        {currentView === 'Electronics' && <Electronics electronicsData={electronicsData} />}
                        {currentView === 'Smartphones' && <Smartphones smart={smart} />}
                        {currentView === 'Oppo' && <Oppo oppoData={oppoData} />}
                        {currentView === 'Apple' && <Apple appleData={appleData} />}
                        {currentView === 'Realme' && <Realme realmeData={realmeData} />}
                    </main>
                    <footer>
                        this is footer
                    </footer>
                </div>
            ) : null}
        </>
    )
}

export default SearchResult
























// import React from 'react'
// import { useEffect, useState } from 'react'
// const SearchResult = () => {
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(false);
//     useEffect(() => {
//         const fetchResults = async () => {
//             setLoading(true)
//             const response = await fetch(`https://fakestoreapi.com/products`)
//             const data = await response.json()
//             setResults(data)
//             setLoading(false)
//         }
//     }, [])
//     return (
//         <div className='search-results'>
//             {loading && <p>Loading...</p>}
//             <div className='search-grid'>
//                 {results?.length === 0
//                     ? <p>No products found.</p>
//                     : results?.map((p, index) => (
//                         <div key={index} className='product-card'>
//                             <img src={p.thumbnail} alt={p.title} />
//                             <h3>{console.log(p.title)}</h3>
//                             <p>${p.price}</p>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default SearchResult