import React from 'react';


const ComputerTechPage = ({ products, loading }) => {
  if (loading) return <div className="flex-status">Loading Computer & Tech...</div>;
  return (
    <div className="flex-page-container">
      <h2 className="section-title">Computer & Technology</h2>
      <div className="flex-product-row">
        {products?.map(product => (
          <div key={product.id} className="flex-item-card">
            <div className="flex-img-box"><img src={product.thumbnail || product.image} alt={product.title} /></div>
            <div className="flex-card-body">
              <h4>{product.title}</h4>
              <p>{product.description?.substring(0, 50)}...</p>
              <div className="flex-card-footer">
                <span>${product.price}</span>
                <button>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ComputerTechPage;