import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
            const data = await response.json()
            setResults(data.products)
            setLoading(false)
        }
        if (query) fetchResults()
    }, [query])
    return (
        <div className='search-results'>
            <h2>Results for: "{query}"</h2>
            {loading && <p>Loading...</p>}
            <div className='search-grid'>
                {results?.length === 0
                    ? <p>No products found.</p>
                    : results?.map((p, index) => (
                        <div key={index} className='product-card'>
                            <img src={p.thumbnail} alt={p.title} />
                            <h3>{p.title}</h3>
                            <p>${p.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SearchResult