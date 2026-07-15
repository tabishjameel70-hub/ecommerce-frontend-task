// import { useNavigate, useParams } from 'react-router-dom'
// import { useState, useEffect, useContext } from 'react'
// import { frontContext } from '../pages/frontContext'

// const Productinfo = ({frontData}) => {
//     const { id } = useParams()
//     const {setProduct} = useContext(frontContext);
//      const [localproduct, setlocalproduct] = useState(null);
//      const navigate = useNavigate();
//      const handleCart = () => {
//       if(localproduct){
//         setProduct(localproduct);
//         navigate('/cart2')
//       }
//      }
//     useEffect(() => {
//         fetch(`https://dummyjson.com/products/${id}`)
//             .then(res => res.json())
//             .then(data => setlocalProduct(data))
//     }, [id])
    
//    if (!localproduct) {
//     return <p>Loading product details...</p>;
//   }
//   return (
//     <div className="contain">
//       {/* COLUMN 1: Gallery Area */}
//       <div className="gallery-column">
//         <div className="main-img">
//           <img src={localProduct.thumbnail} alt={localProduct.title} />
//         </div>
//         <div className="extra-images">
//           {localProduct.images?.map((img, index) => (
//             <img key={index} src={img} alt={`view-${index}`} />
//           ))}
//         </div>
//       </div>

//       {/* COLUMN 2: Core Info Area */}
//       <div className="info-column">
//         <div className="info">
//           <span className="stock-badge">✓ In stock</span>
//           <h2 className="detail-title">{localProduct.title}</h2>

//           <div className="rating-row">
//             <span className="stars">{'⭐'.repeat(Math.round(localProduct.rating || 0))}</span>
//             <span className="rating-text"> {localProduct.rating} • 32 reviews</span>
//           </div>

//           <div className="price-banner">
//             <div className="price-block">
//               <h4>${localProduct.price}</h4>
//               <p>50-100 pcs</p>
//             </div>
//             <div className="price-block highlight">
//               <h4>🏷️ {localProduct.discountPercentage}% off</h4>
//               <p>100+ pcs</p>
//             </div>
//           </div>

//           <p className="product-main-desc">{localProduct.description}</p>
//         </div>

//         <div className="extra-info">
//           <div className="info-row">
//             <span className="label">Price:</span>
//             <span className="value negotiation">Negotiable</span>
//           </div>
//           <div className="info-row">
//             <span className="label">Protection:</span>
//             <span className="value">Refund policy</span>
//           </div>
//           <div className="info-row">
//             <span className="label">Warranty:</span>
//             <span className="value">2 years full warranty</span>
//           </div>
//         </div>
//       </div>

//       {/* COLUMN 3: Supplier Sidebar Card */}
//       <div className="supplier-column">
//         <div className="supplier-card">
//           <div className="supplier-header">
//             <div className="supplier-avatar">R</div>
//             <div>
//               <h5>Supplier</h5>
//               <p>Guanjoi Trading LLC</p>
//             </div>
//           </div>
//           <hr />
//           <div className="supplier-details">
//             <p>🇩🇪 Germany, Berlin</p>
//             <p>🛡️ Verified Seller</p>
//             <p>🌐 Worldwide Shipping</p>
//           </div>
//           <button className="btn-inquiry">Send inquiry</button>
//           <button className="btn-profile" onClick={handleClick}>cart</button>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Productinfo

