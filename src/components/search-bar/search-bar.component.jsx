import React from "react";
import "./search-bar.style.scss";

const SearchBar = ({ handleChange }) => {
  return (
    <div className="search">
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search for a country..."
          className="search__input"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
