import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const RecipeDetail = () => {
  const { recipeId } = useParams();
  const { data: recipes } = useFetch(
    "https://b8130d2b-1e71-49fd-a65f-942326f87ed8-00-p9c3wsr4xudz.sisko.replit.dev/recipes",
  );
  const recipe = recipes?.find((recipe) => recipe._id == recipeId);

  return (
    <div className="container my-4">
      {recipe && (
        <>
          <h1>{recipe.recipeName}</h1>
          <div className="card " style={{height: "500px"}}>
            <div className="row">
              <div className="col-md-4">
                <img
                  src={recipe.recipeImageUrl}
                  className="img-fluid"
                  alt={recipe.recipeName}
                  style={{height: "500px"}}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title">Cuisine: {recipe.cuisineType}</h2>
                  <h3 className="card-title">Ingredients:</h3>
                  <p className="card-text">{recipe.ingredients.join(", ")}</p>

                  <h3 className="card-title">Instructions:</h3>
                  <ol>
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeDetail;
