import React, { useState } from 'react';
const Smartphones = ({ smart }) => {
  // State to handle the wishlist toggle per item index
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (index) => {
    setLikedProducts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="container">
      {smart?.map((p, index) => {
        const isLiked = !!likedProducts[index];

        return (
          <div className="cccc product-card" key={index}>
            
            {/* 1. Wishlist Button using your custom top/left coordinates */}
            <button
              className={`wishlist-btn ${isLiked ? 'liked' : ''}`}
              onClick={() => toggleLike(index)}
            >
              ❤️
            </button>

            {/* 2. Image Area bounded by your 250px by 150px limits */}
            <div className="image-container">
              <img src={p.thumbnail} alt={p.title} />
            </div>

            {/* 3. Dynamic Product Info Panel */}
            <div className="result-info product-info">
              
              {/* Pricing Line */}
              <div className="price-row">
                <span className="current-price">${p.price}</span>
                {p.discountPercentage && (
                  <span className="discount-tag">🏷️ {p.discountPercentage}% off</span>
                )}
              </div>

              {/* Star Rating Line */}
              <div className="rating-row">
                <span>{'⭐'.repeat(Math.round(p.rating))}</span>
                <span className="rating-num"> ({p.rating})</span>
              </div>

              {/* Title & Trimmed Description Text */}
              <h2 className="product-title">{p.title}</h2>
              <p className="product-desc">{p.description}</p>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Smartphones;