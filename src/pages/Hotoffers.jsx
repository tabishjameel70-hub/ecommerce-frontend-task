import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hotoffers = ({ offers }) => {
    const navigate = useNavigate();
    return (
        <div className='offer-conatiner'>
            <div className="content">
                {offers?.length === 0
                    ? <p>No products found.</p>
                    : offers?.map((p, index) => (
                        /* Move onClick here so it correctly grabs the specific 'p.id' */
                        <div className="result" key={index} onClick={() => navigate(`/productdetails4/${p.id}`)}>
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
            </div>
        </div>
    )
}

export default Hotoffers