import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const purchasing = () => {
  const navigate = useNavigate();

  // Form State containing only your requested fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    houseAddress: '',
    city: '',
    postalCode: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Success Screen
  if (isSubmitted) {
    return (
      <div className="success-container">
        <div className="success-card">
          <span className="success-icon">🎉</span>
          <h2>Order Successful!</h2>
          <p className="success-thankyou">Thank you for your purchase, {formData.fullName}!</p>
          
          <div className="success-details-box">
            <h4>Delivery & Contact Summary:</h4>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.houseAddress}</p>
            <p><strong>City:</strong> {formData.city}</p>
            <p><strong>Postal Code:</strong> {formData.postalCode}</p>
            <p><strong>Country:</strong> {formData.country}</p>
          </div>

          <button className="btn-return-home" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  // Form Screen
  return (
    <div className="checkout-solo-container">
      <div className="checkout-form-section">
        <h2 className="checkout-title">Checkout</h2>
        <p className="checkout-subtitle">Please fill out your shipping and contact details below.</p>
        
        <form onSubmit={handleSubmit} className="shipping-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="houseAddress">House Location / Street Address</label>
            <input
              type="text"
              id="houseAddress"
              name="houseAddress"
              placeholder="Apt 4B, 123 Sunshine Street"
              value={formData.houseAddress}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Berlin"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                placeholder="10115"
                value={formData.postalCode}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Germany"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="btn-place-order">
            Complete Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default purchasing 