import React from 'react'

const Hotoffers = ({ offers }) => {
    return (
        <div className='offer-conatiner'>
            <div className="content">
                {offers?.length === 0
                    ? <p>No products found.</p>
                    : offers?.map((p, index) => (
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
            </div>
        </div>

    )
}

export default Hotoffers