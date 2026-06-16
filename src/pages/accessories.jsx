import {useState} from 'react'

const Accessories = ({ access }) => {
    const [likedProducts, setLikedProducts] = useState({});
    const toggleLike = (index) => {
        setLikedProducts((prev) => ({
            ...prev,
            [index]: !prev[index], // flips true/false for just this item
        }));
    };
    return (
        <div className="container">
            {access?.map((p, index) => {
                const isLiked = !!likedProducts[index];
                return (
                    <div className="product-card" key={index}>

                        {/* 1. Floating Wishlist Button */}
                        <button
                            className={`wishlist-btn ${isLiked ? 'liked' : ''}`}
                            onClick={() => toggleLike(index)}
                        >
                            ❤️
                        </button>

                        {/* 2. Image Area */}
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

                            {/* Rating Row using your clever string repeat logic! */}
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
    )
}

export default Accessories 