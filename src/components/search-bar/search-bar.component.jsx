import React from "react";
import "./search-bar.style.scss";

const SearchBar = () => {
  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Search for a country..."
          className="search__input"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
