import React, { useContext,useState } from 'react'
import  {ProductContext}  from '../pages/productContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {product2} = useContext( ProductContext );
  const [Quantity, setQuantity] = useState(1)
  if(!product2){
    return <p>there is no product</p>
 }
 const navigate = useNavigate();
  return (
   <div className="product-detail-container">
  {/* Left Column: Image Gallery */}
  <div className="gallery-section">
    <div className="main-image-wrapper">
      <img 
        src={product2?.thumbnail} 
        alt={product2?.title || "Product Image"} 
        className="main-product-image"
      />
    </div>
    
    <div className="thumbnail-strip">
      {product2?.images?.map((img, index) => (
        <img 
          key={index} 
          src={img} 
          alt={`view-${index}`} 
          className="thumbnail-item"
        />
      ))}
    </div>
  </div>

  {/* Right Column: Product Details */}
  <div className="details-section">
    <div className="product-info-wrapper">
      <span className="stock-badge">✓ In Stock</span>
      <h2 className="product-title">{product2?.title}</h2>

      <div className="product-rating-row">
        <span className="rating-stars">
          {'⭐'.repeat(Math.round(product2?.rating || 0))}
        </span>
        <span className="rating-metrics"> 
          {product2?.rating} • 32 reviews
        </span>
      </div>

      {/* Pricing Banner Box */}
      <div className="pricing-grid-banner">
        <div className="price-tier-card">
          <h4 className="price-value">${product2?.price}</h4>
          <p className="price-qty-range">50-100 pcs</p>
        </div>
        <div className="price-tier-card discount-highlight">
          <h4 className="price-value">🏷️ {product2?.discountPercentage}% off</h4>
          <p className="price-qty-range">100+ pcs</p>
        </div>
      </div>

      <p className="product-description">{product2?.description}</p>
    </div>

    {/* Technical Data & Purchase Options */}
    <div className="purchase-options-section">
      <div className="spec-row">
        <span className="spec-label">Price:</span>
        <span className="spec-valuenegotiation-badge">Negotiable</span>
      </div>
      
      <div className="quantity-control-row">
        <span className="spec-label">Quantity:</span>
        <button 
          className="quantity-selector-btn"
          onClick={() => setQuantity(Quantity + 1)}
        >
          {Quantity} <span>+</span>
        </button>
        <button onClick={()=> navigate('/purchasing')}>buy now</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Cart