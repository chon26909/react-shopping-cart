import { useContext } from "react";
import { createContext, useReducer } from "react";
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
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState);

    const removeItem = (id) => {
        dispatch( { type:"REMOVE_ITEM", payload: id } )
    } 

    return (
        <CartContext.Provider value={{...state, removeItem}}>
            {children}
        </CartContext.Provider>
    )
};