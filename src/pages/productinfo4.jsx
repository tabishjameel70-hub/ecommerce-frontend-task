import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "./productContext"; // Adjust this path if needed

const ProductInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Destructuring offers and your cart update state from context
  const { offers, setProduct2 } = useContext(ProductContext);

  if (!offers) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  // Find the clicked product by ID
  const product = offers.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="error-container">
        <h2>Oops! Product not found.</h2>
        <button className="back-btn" onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  // Adds product to cart context and routes straight to the Cart
  const handleAddToCart = () => {
    setProduct2(product); 
    navigate("/Cart");
  };

  return (
    <div className="page-wrapper">
      <div className="product-container">
        {/* Left: Product Image */}
        <div className="image-section">
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="product-image" 
          />
        </div>

        {/* Right: Product Details */}
        <div className="details-section">
          <span className="category">{product.category}</span>
          <h1 className="product-title">{product.title}</h1>
          
          <div className="rating-row">
            <span className="stars">★ ★ ★ ★ ☆</span>
            <span className="reviews">({product.reviews?.length || 32} reviews)</span>
          </div>

          <hr className="divider" />

          <div className="price-row">
            <span className="price">${product.price}</span>
            {product.discountPercentage && (
              <span className="discount">{product.discountPercentage}% OFF</span>
            )}
          </div>

          {/* Description */}
          <p className="description">{product.description}</p>

          {/* Meta Specifications */}
          <div className="meta-info">
            <p><strong>Brand:</strong> {product.brand || "Generic"}</p>
            <p><strong>Stock:</strong> <span className="stock-text">{product.stock > 0 ? "✔ In Stock" : "Out of Stock"}</span></p>
            <p><strong>Shipping:</strong> {product.shippingInformation || "Free shipping within 2 days"}</p>
            <p><strong>Warranty:</strong> {product.warrantyInformation || "1 Year local warranty"}</p>
          </div>

          {/* Add to Cart Button */}
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart & View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;