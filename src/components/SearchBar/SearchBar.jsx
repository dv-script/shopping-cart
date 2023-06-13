import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";

import "./SearchBar.css";

import AppContext from "../../context/AppContext";
import fetchProducts from "../../api/fetchProducts";

function SearchBar() {

  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    const products = await fetchProducts(searchValue);

    setLoading(false);
    setProducts(products);
    setSearchValue("");
  };

  return (
    <form 
      className="search-bar"
      onSubmit={handleSearch}
    >
      <input
        type="search"
        value={searchValue}
        placeholder="Search products"
        className="search__input"
        onChange={ ({ target }) => setSearchValue(target.value) }
        required
      />

      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
