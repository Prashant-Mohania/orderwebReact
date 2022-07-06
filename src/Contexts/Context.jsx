import React, { createContext, useContext, useReducer } from "react";
import { products } from "../products";
import { cartReducer } from "./Reducers";

const Cart = createContext();

function Context({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    products: { ...products, qty: 1 },
    cart: [],
  });
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
