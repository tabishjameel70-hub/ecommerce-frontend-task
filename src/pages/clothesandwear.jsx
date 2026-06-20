import React from 'react';

// Fixed property casing to match your App.jsx route prop perfectly
const CLothesandwear = ({ clothesandWear }) => {
  return (
    <div className="clothes-page-container">
      <h1 className="page-main-heading">Clothes & Wear</h1>
      
      {!clothesandWear || clothesandWear.length === 0 ? (
        <p className="empty-collection">No apparel items found matching this filter.</p>
      ) : (
        <div className="clothes-flex-row">
          {clothesandWear.map((product) => (
            <div key={product.id} className="clothing-item-card">
              <div className="apparel-img-container">
                <img 
                  src={product.thumbnail || product.image} 
                  alt={product.title} 
                />
              </div>
              <div className="apparel-card-details">
                <span className="apparel-category-tag">{product.category}</span>
                <h3 className="apparel-item-title">{product.title}</h3>
                <p className="apparel-item-desc">
                  {product.description?.substring(0, 55)}...
                </p>
                <div className="apparel-card-footer">
                  <span className="apparel-item-price">${product.price}</span>
                  <button className="apparel-action-btn">View Item</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CLothesandwear ;