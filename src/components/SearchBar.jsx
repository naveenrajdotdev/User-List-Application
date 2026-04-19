import React from "react";
import { useUsers } from "../context/UserContext";

const SearchBar = () => {
  const { setSearch } = useUsers();

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;