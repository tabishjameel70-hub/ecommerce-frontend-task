import React, { useState } from 'react'
import Productsection from '../components/Productsection'
import logo from '../assets/logo.png'
const SearchResult = ({ filterproduct, loading, input }) => {
    return (
        <>
            <div className='search'>
                <aside>
                    <div className="category">
                        <h2>category</h2>
                        <p>mobile accesorry</p>
                        <p>electonics</p>
                        <p>smart phones</p>
                        <p>modern tech</p>
                    </div>
                    <div className="brands">
                        <div className="category">
                            <h2>Brands</h2>
                            <label>
                                <input type="checkbox" />
                                samsung
                            </label>
                            <label>
                                <input type="checkbox" />
                                Apple
                            </label>
                            <label>
                                <input type="checkbox" />
                                Huawei
                            </label>
                            <label>
                                <input type="checkbox" />
                                Pocco
                            </label>
                            <label>
                                <input type="checkbox" />
                                Lenovo
                            </label>
                        </div>
                    </div>
                    <div className="features">
                        <div className="category">
                            <h2>Features</h2>
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
                    </div>
                    <div className="price">
                        <input
                            type="range"
                            id="volume"
                            min="0"
                            max="100"
                            step="1"
                        />
                        <div>
                            <h6>Min</h6>
                            <input type="text" placeholder='0' />
                            <h6>Max</h6>
                            <input type="text" placeholder='9999' />
                        </div>
                        <button>Apply</button>
                    </div>
                    <div className="condition"></div>
                    <div className="ratings"></div>
                </aside>
                <main>
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
                </main>
                <footer>
                    this is footer
                </footer>
            </div>
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