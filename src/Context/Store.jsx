/* eslint-disable react/prop-types */

import { createContext, useState, useEffect, useReducer } from "react";
import CartReducer from "./CartReducer";
import WishReducer from "./WishReducer";
export const StoreCard = createContext();
const Store = ({ children }) => {

  const initialItem = localStorage.getItem("store")
    ? JSON.parse(localStorage.getItem("store"))
    : [];

  const wishItem = localStorage.getItem("wish")
    ? JSON.parse(localStorage.getItem("wish"))
    : [];

  const seeItem = localStorage.getItem("see")
    ? JSON.parse(localStorage.getItem("see"))
    : [];

  const [data, setData] = useState([]);

  const [cart, dispatch] = useReducer(CartReducer, initialItem);
  const [wishList, dispatchWishList] = useReducer(WishReducer, wishItem);
  const [seeList, dispatchSeeList] = useReducer(WishReducer, seeItem);

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

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(cart));
    localStorage.setItem("wish", JSON.stringify(wishList));
    localStorage.setItem("see", JSON.stringify(seeList));
  }, [cart, wishList,seeList]);

  const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };
  return (
    <StoreCard.Provider
      value={{
        cart,
        data,
        wishList,
        seeList,
        dispatchSeeList,
        truncateText,
        dispatchWishList,
        dispatch,
      }}
    >
      {children}
    </StoreCard.Provider>
  );
};
export default Store;
