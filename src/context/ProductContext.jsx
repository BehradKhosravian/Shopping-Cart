import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const productContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await api.get("/products");
        setProducts(response);
      };
      fetchProducts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <productContext.Provider value={products}>
      {children}
    </productContext.Provider>
  );
}

export const useProducts = () => {
  const products = useContext(productContext);
  return products;
};

export default ProductsProvider;
