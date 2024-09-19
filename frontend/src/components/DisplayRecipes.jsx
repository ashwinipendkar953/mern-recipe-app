import { Link } from "react-router-dom";
import DeleteRecipe from "./DeleteRecipe";

const DisplayRecipes = ({ recipes, loading, error }) => {
  return (
    <div className="py-3">
      <h2>All Recipes:</h2>
      {loading && <p>Loading...</p>}
      {error && (
        <p className="text-danger fw-semibold">
          An error occurred while fetching data.
        </p>
      )}
      <div className="row g-3">
        {recipes?.map((recipe) => {
          const { recipeName, recipeImageUrl, cuisineType } = recipe;
          return (
            <div className="col-md-3" key={recipe._id}>
              <div className="card h-100">
                <img
                  src={recipeImageUrl}
                  className="card-img-top"
                  alt={recipeName}
                  height={400}
                />
                <div className="card-body">
                  <h2 className="card-title">{recipeName}</h2>
                  <p className="card-text">
                    <strong>Cuisine Type:</strong> {cuisineType}
                  </p>
                  <p className="card-text">
                    <strong>Ingredients:</strong>{" "}
                    <Link to={`/recipes/${recipe._id}`}>See Recipe &gt;</Link>
                  </p>
                  <p className="card-text">
                    <strong>Instructions:</strong>{" "}
                    <Link to={`/recipes/${recipe._id}`}>See Recipe &gt;</Link>{" "}
                  </p>
                  <DeleteRecipe recipeId={recipe._id} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayRecipes;
