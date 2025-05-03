/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import CartReducer from "./CartReducer";
import WishReducer from "./WishReducer";
import SeeReducer from "./SeeReducer";

export const StoreCard = createContext();

const getFromLocalStorage = (key, fallback = []) => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  }
  return fallback;
};

const Store = ({ children }) => {
  const [cart, dispatch] = useReducer(
    CartReducer,
    getFromLocalStorage("store")
  );
  const [wishList, dispatchWishList] = useReducer(
    WishReducer,
    getFromLocalStorage("wish")
  );
  const [seeList, dispatchSeeList] = useReducer(
    SeeReducer,
    getFromLocalStorage("see")
  );

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(cart));
    localStorage.setItem("wish", JSON.stringify(wishList));
    localStorage.setItem("see", JSON.stringify(seeList));
  }, [cart, wishList, seeList]);

  return (
    <StoreCard.Provider
      value={{
        cart,
        wishList,
        seeList,
        dispatchSeeList,
        dispatchWishList,
        dispatch,
      }}
    >
      {children}
    </StoreCard.Provider>
  );
};
export default Store;
