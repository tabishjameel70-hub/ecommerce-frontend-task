import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Productinfo2 = (offers) => {
    const { id } = useParams();
    const [product2, setProduct2] = useState([]);
    const [Cart, setCart] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/mobile-accessories`)
            .then(res => res.json())
            .then(data => setProduct2(data))
    }, [id])
    if (!product2) return <p>Loading...</p>
    return (
        <div className="contain">
            {/* COLUMN 1: Gallery Area */}
            <div className="gallery-column">
                <div className="main-img">
                    <img src={product2.thumbnail} alt={product2.title} />
                </div>
                <div className="extra-images">
                    {product2.images?.map((img, index) => (
                        <img key={index} src={img} alt={`view-${index}`} />
                    ))}
                </div>
            </div>

            {/* COLUMN 2: Core Info Area */}
            <div className="info-column">
                <div className="info">
                    <span className="stock-badge">✓ In stock</span>
                    <h2 className="detail-title">{product2.title}</h2>

                    <div className="rating-row">
                        <span className="stars">{'⭐'.repeat(Math.round(product2.rating))}</span>
                        <span className="rating-text"> {product2.rating} • 32 reviews</span>
                    </div>

                    {/* Pricing Banner Box */}
                    <div className="price-banner">
                        <div className="price-block">
                            <h4>${product2.price}</h4>
                            <p>50-100 pcs</p>
                        </div>
                        <div className="price-block highlight">
                            <h4>🏷️ {product2.discountPercentage}% off</h4>
                            <p>100+ pcs</p>
                        </div>
                    </div>

                    {/* Added description right below the main info segment */}
                    <p className="product-main-desc">{product2.description}</p>
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
                    <button className="btn-profile" onClick={()=> navigate('/Cart')}>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}

export default Productinfo2