import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch, error }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <svg
        className="search-icon"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          d="M10.6 16C13.9137 16 16.6 13.3137 16.6 10C16.6 6.68629 13.9137 4 10.6 4C7.28629 4 4.6 6.68629 4.6 10C4.6 13.3137 7.28629 16 10.6 16Z"
          stroke="#0079FF"
          strokeWidth="2.5"
        />
        <path d="M15 15L20 20" stroke="#0079FF" strokeWidth="2.5" />
      </svg>
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {error && <span className="error-text">No results</span>}
      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
