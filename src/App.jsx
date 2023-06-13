import React from "react";

import Provider from "./context/Provider";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <Provider>
      <Header />
      <Products />  
    </Provider>
  );
}

export default App;
