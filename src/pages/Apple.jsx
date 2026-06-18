import React from 'react'

const Apple = ({ appleData }) => {
  return (
    <div className='Apple'>
      {appleData?.map((p, index) => (
        <div className='products' key={index}>
          <img src={p.thumbnail} alt={p.title} />
          <div className="products-info">
          <h2>{p.title}</h2>
          <h3>${p.price}</h3>
          <p>🏷️ {p.discountPercentage}% off</p>
          <p>{'⭐'.repeat(Math.round(p.rating))}</p>
          <p>{p.description}</p>
          <p>{p.description}</p> 
          </div>
        </div>
      ))}
    </div>
  )
}

export default Apple