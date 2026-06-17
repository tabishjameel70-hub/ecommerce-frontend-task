import React from 'react'

const Oppo = ({ oppoData }) => {
  return (
    <div>
      {oppoData?.map((p, index) => (
        <div key={index}>
          <div className="products">
          <img src={p.thumbnail} alt={p.title} />
           <div className="products-info">
            <h2>{p.title}</h2>
            <h3>${p.price}</h3>
            <p>🏷️ {p.discountPercentage}% off</p>
            <p>{'⭐'.repeat(Math.round(p.rating))}</p>
            <p>{p.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Oppo