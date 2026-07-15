import { createContext, useState } from "react";

export const ProductContext = createContext(null);

const UpdateProduct = ({ children }) => {
  // Put BOTH states in this single provider
  const [product2, setProduct2] = useState(null);
  const [offers, setOffers] = useState(null); 

  return (
    // Pass everything down in ONE single value object
    <ProductContext.Provider value={{ product2, setProduct2, offers, setOffers }}>
      {children}
    </ProductContext.Provider>
  );
};

export default UpdateProduct;