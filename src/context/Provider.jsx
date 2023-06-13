/* eslint-disable react/prop-types */
import React, { useState } from "react";

import AppContext from "./AppContext";

function Provider({ children }) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const contextValue = {
    products,
    setProducts,
    loading,
    setLoading,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
