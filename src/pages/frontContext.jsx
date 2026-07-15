import { createContext, useState } from "react";
export const frontContext = createContext();
const UpdateContext = ({ children }) => {
    const [product, setProduct] = useState(null);
    return (
        <frontContext.Provider value={{ product, setProduct }}>
            {children}
        </frontContext.Provider>
    )
}
export default UpdateContext