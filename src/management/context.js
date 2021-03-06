import { createContext, useContext, useReducer, useEffect } from "react";
import data from "../data/data";
import reducer from "./reducer";

const initState = {
  cart: data,
  total: 1000,
  amount: 3,
};

export const CartContext = createContext();

export const MyCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.cart]);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const toggleQuantity = (id, type) => {
    dispatch({ type: "TOGGLE_QUANTITY", payload: { id, type } });
  };

  const formatNumber = (num) => {
      const _format = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
      return _format;
  }

  return (
    <CartContext.Provider value={{ ...state, removeItem, toggleQuantity,formatNumber }}>
      {children}
    </CartContext.Provider>
  );
};
