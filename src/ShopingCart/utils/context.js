import { createContext, useReducer } from "react";
import reducers from "./reducers";

export const ShopingCartContext = createContext();

const initialState = {
  products: [
    { id: Math.random(), name: "books", qty: 1, price: 100 },
    { id: Math.random(), name: "pencil", qty: 2, price: 75 },
    { id: Math.random(), name: "eraser", qty: 3, price: 50 },
  ],
};

const ShopingCart = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <ShopingCartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ShopingCartContext.Provider>
  );
};
export default ShopingCart;
