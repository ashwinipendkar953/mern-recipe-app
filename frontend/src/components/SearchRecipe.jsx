import { useState } from "react";

const SearchRecipe = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const changeHandler = (event) => {
    const value = event.target.value;
    setQuery(value);
   onSearch(value);
  };

  return (
    <form className="d-flex col-md-6" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search by recipe name..."
        aria-label="Search"
        value={query}
        onChange={changeHandler}
      />
    </form>
  );
};

export default SearchRecipe;
