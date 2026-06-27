import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Productinfo4 = () => {
    const {id} = useParams();
    const [product4, setproduct4] = useState(null);
    const result = async() => {
        const response = await fetch(`https://dummyjson.com/products`);
        const result = await response.json();
        setproduct4(result.products);
    }
    useEffect(()=>{
        result();
    },[id]);
   if (!product4) return <p>Loading...</p>
  return (
   <div className="contain">
            {/* COLUMN 1: Gallery Area */}
            <div className="gallery-column">
                <div className="main-img">
                    <img src={product4.thumbnail} alt={product4.title} />
                </div>
                <div className="extra-images">
                    {product4.images?.map((img, index) => (
                        <img key={index} src={img} alt={`view-${index}`} />
                    ))}
                </div>
            </div>

            {/* COLUMN 2: Core Info Area */}
            <div className="info-column">
                <div className="info">
                    <span className="stock-badge">✓ In stock</span>
                    <h2 className="detail-title">{product4.title}</h2>

                    <div className="rating-row">
                        <span className="stars">{'⭐'.repeat(Math.round(product4.rating))}</span>
                        <span className="rating-text"> {product4.rating} • 32 reviews</span>
                    </div>

                    {/* Pricing Banner Box */}
                    <div className="price-banner">
                        <div className="price-block">
                            <h4>${product4.price}</h4>
                            <p>50-100 pcs</p>
                        </div>
                        <div className="price-block highlight">
                            <h4>🏷️ {product4.discountPercentage}% off</h4>
                            <p>100+ pcs</p>
                        </div>
                    </div>

                    {/* Added description right below the main info segment */}
                    <p className="product-main-desc">{product4.description}</p>
                </div>

                {/* Technical Data Rows */}
                <div className="extra-info">
                    <div className="info-row">
                        <span className="label">Price:</span>
                        <span className="value negotiation">Negotiable</span>
                    </div>
                    <div className="info-row">
                        <span className="label">Protection:</span>
                        <span className="value">Refund policy</span>
                    </div>
                    <div className="info-row">
                        <span className="label">Warranty:</span>
                        <span className="value">2 years full warranty</span>
                    </div>
                </div>
            </div>

            {/* COLUMN 3: Supplier Sidebar Card */}
            <div className="supplier-column">
                <div className="supplier-card">
                    <div className="supplier-header">
                        <div className="supplier-avatar">R</div>
                        <div>
                            <h5>Supplier</h5>
                            <p>Guanjoi Trading LLC</p>
                        </div>
                    </div>
                    <hr />
                    <div className="supplier-details">
                        <p>🇩🇪 Germany, Berlin</p>
                        <p>🛡️ Verified Seller</p>
                        <p>🌐 Worldwide Shipping</p>
                    </div>
                    <button className="btn-inquiry">Send inquiry</button>
                    <button className="btn-profile">Seller's profile</button>
                </div>
            </div>

    </div>
  )
}

export default Productinfo4