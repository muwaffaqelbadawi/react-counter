import React from "react";
import "../Styles/search.css";

const Search = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <lable htmlFor="search">Srarch</lable>
      <input
        id="search"
        type="text"
        value={setSearch}
        placeholder="Search song"
        role="search"
        onChange={(e) => setSearch(e.target.value)}
        onMouseOver={e => setSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
