import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Electronics = ({ electronicsData }) => {
  // Keeps track of which index has been liked
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (index) => {
    e.stopPropagation();
    setLikedProducts((prev) => ({
      ...prev,
      [index]: !prev[index], 
    }));
  };
  const navigate = useNavigate();
  return (
    <div className="container">
      {electronicsData?.map((p, index) => {
        const isLiked = !!likedProducts[index];

        return (
          <div className="cccc product-card" key={index} onClick={()=> navigate(`/productdetails3/${p.id}`)}>
            
            {/* 1. Floating Wishlist Button */}
            <button
              className={`wishlist-btn ${isLiked ? 'liked' : ''}`}
              onClick={() => toggleLike(index)}
            >
              ❤️
            </button>

            {/* 2. Image Area using your new structural wrapping */}
            <div className="image-container">
              <img src={p.thumbnail} alt={p.title} />
            </div>

            {/* 3. Product Info */}
            <div className="result-info product-info">
              
              {/* Pricing Row */}
              <div className="price-row">
                <span className="current-price">${p.price}</span>
                {p.discountPercentage && (
                  <span className="discount-tag">🏷️ {p.discountPercentage}% off</span>
                )}
              </div>

              {/* Rating Row */}
              <div className="rating-row">
                <span>{'⭐'.repeat(Math.round(p.rating))}</span>
                <span className="rating-num"> ({p.rating})</span>
              </div>

              {/* Title & Description */}
              <h2 className="product-title">{p.title}</h2>
              <p className="product-desc">{p.description}</p>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default Electronics;