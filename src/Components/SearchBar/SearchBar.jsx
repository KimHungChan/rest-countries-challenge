import React from "react";

import "./SearchBar.scss";

const SearchBar = ({ onChange }) => {
  return (
    <div className="search-bar">
      <i class="fa-solid fa-magnifying-glass"></i>

      <input
        type="text"
        placeholder="Search for a country..."
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
