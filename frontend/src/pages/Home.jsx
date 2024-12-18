import React, { useEffect, useState } from "react";
import DisplayRecipes from "../components/DisplayRecipes";
import SearchRecipe from "../components/SearchRecipe";
import useFetch from "../useFetch";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://mern-recipe-api.vercel.app/recipes"
  );

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, [data]);

  const handleSearchClick = (searchInput) => {
    if (searchInput === "") {
      setRecipes(data);
      return;
    }

    const filterRecipes = data.filter((recipe) =>
      recipe.recipeName.toLowerCase().includes(searchInput.toLowerCase())
    );

    setRecipes(filterRecipes);
  };

  return (
    <div className="container my-3">
      <SearchRecipe onSearch={handleSearchClick} />
      <DisplayRecipes recipes={recipes} loading={loading} error={error} />
    </div>
  );
};

export default Home;
