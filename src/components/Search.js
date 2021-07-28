import React from "react";

function Search({ searchTerm, onSearchChange }) {
  return (
    <div className="searchbar">
      <label className="search">Search Gear:</label>
      <input
        type="text"
        id="search"
        placeholder="Type the name here..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button type="submit">🔍</button>
    </div>
  )
}

export default Search;