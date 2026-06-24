import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Productinfo2 = () => {
    const { id } = useParams();
    const [product3, setProduct3] = useState(null);
    const results = async()=> {
        const [mobiles, laptops, accessories, watches, tablets] = await Promise.all([
            fetch('https://dummyjson.com/products/category/smartphones?limit=1').then(r => r.json()),
            fetch('https://dummyjson.com/products/category/laptops?limit=2').then(r => r.json()),
            fetch('https://dummyjson.com/products/category/mobile-accessories?limit=1').then(r => r.json()),
            fetch('https://dummyjson.com/products/category/watches?limit=2').then(r => r.json()),
            fetch('https://dummyjson.com/products/category/tablets?limit=2').then(r => r.json()),

        ])
        const merged = [
            ...mobiles.products,
            ...laptops.products,
            ...accessories.products,
            ...watches.products,
            ...tablets.products,
        ]
        setProduct3(merged)
    }
    useEffect(() => {
      results();
    }, [id])
    if (!product3) return <p>Loading...</p>
    return (
    <div className="contain">
            {/* COLUMN 1: Gallery Area */}
            <div className="gallery-column">
                <div className="main-img">
                    <img src={product3.thumbnail} alt={product3.title} />
                </div>
                <div className="extra-images">
                    {product3.images?.map((img, index) => (
                        <img key={index} src={img} alt={`view-${index}`} />
                    ))}
                </div>
            </div>

            {/* COLUMN 2: Core Info Area */}
            <div className="info-column">
                <div className="info">
                    <span className="stock-badge">✓ In stock</span>
                    <h2 className="detail-title">{product3.title}</h2>

                    <div className="rating-row">
                        <span className="stars">{'⭐'.repeat(Math.round(product3.rating))}</span>
                        <span className="rating-text"> {product3.rating} • 32 reviews</span>
                    </div>

                    {/* Pricing Banner Box */}
                    <div className="price-banner">
                        <div className="price-block">
                            <h4>${product3.price}</h4>
                            <p>50-100 pcs</p>
                        </div>
                        <div className="price-block highlight">
                            <h4>🏷️ {product3.discountPercentage}% off</h4>
                            <p>100+ pcs</p>
                        </div>
                    </div>

                    {/* Added description right below the main info segment */}
                    <p className="product-main-desc">{product3.description}</p>
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

export default Productinfo2