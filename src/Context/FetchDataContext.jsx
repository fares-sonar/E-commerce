/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const FetchData = createContext();

const FetchDataContext = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const updateData = data.map((item) => ({
          ...item,
          quantity: 1,
        }));
        setData(updateData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProducts();
  }, []);

  return <FetchData.Provider value={{ data }}>{children}</FetchData.Provider>;
};
export default FetchDataContext;
