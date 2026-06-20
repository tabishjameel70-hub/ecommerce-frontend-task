import React from 'react';

const Automobiles = ({ automobile }) => {
  return (
    <div className="automobiles-container">
      <h1 className="category-title">Automobiles & Vehicles</h1>
      <div className="vehicles-grid">
        {automobile?.map((product) => (
          <div key={product.id} className="vehicle-card">
            <div className="img-holder">
              <img
                src={product.thumbnail || product.image}
                alt={product.title}
              />
            </div>
            <div className="vehicle-info">
              <span className="vehicle-brand">{product.brand}</span>
              <h3 className="vehicle-name">{product.title}</h3>
              <p className="vehicle-excerpt">
                {product.description?.substring(0, 55)}...
              </p>
              <div className="vehicle-meta">
                <span className="vehicle-price">${product.price}</span>
                <button className="details-action-btn">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Automobiles;