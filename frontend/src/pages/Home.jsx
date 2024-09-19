import { useEffect, useState } from "react";
import DisplayRecipes from "../components/DisplayRecipes";
import SearchRecipe from "../components/SearchRecipe";
import useFetch from "../useFetch";

const Home = () => {
  const { data, loading, error } = useFetch(
    "https://b8130d2b-1e71-49fd-a65f-942326f87ed8-00-p9c3wsr4xudz.sisko.replit.dev/recipes",
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
      recipe.recipeName.toLowerCase().includes(searchInput.toLowerCase()),
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
