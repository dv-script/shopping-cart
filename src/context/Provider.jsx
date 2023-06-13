/* eslint-disable react/prop-types */
import React, { useState } from "react";

import AppContext from "./AppContext";

function Provider({ children }) {

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const contextValue = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
