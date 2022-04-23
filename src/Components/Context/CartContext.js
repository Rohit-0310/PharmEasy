import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [mycart, setmyCart] = useState([]);

  return (
    <CartContext.Provider value={{ mycart, setmyCart }}>
      {children}
    </CartContext.Provider>
  );
};
