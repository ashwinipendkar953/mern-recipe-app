import { useState } from "react";

const AddRecipe = () => {
  const initialRecipeData = {
    recipeName: "",
    cuisineType: "",
    recipeImageUrl: "",
    ingredients: [],
    instructions: [],
  };
  const [formData, setFormData] = useState(initialRecipeData);
  const [successMessage, setSuccessMessage] = useState("");

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "ingredients" || name === "instructions"
          ? value.split(",").map((item) => item.trim())
          : name === "instructions"
            ? value.split("\n").map((item) => item.trim())
            : value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://b8130d2b-1e71-49fd-a65f-942326f87ed8-00-p9c3wsr4xudz.sisko.replit.dev/recipes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw "Failed to add recipe.";
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Recipe added successfully.");
      }
    } catch (error) {
      console.log(error);
    }
    setFormData(initialRecipeData);
  };

  return (
    <div className="container my-4 ">
      <h1>Add Recipe</h1>
      {successMessage && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {successMessage}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <form onSubmit={submitHandler}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="recipeName"
          value={formData.recipeName}
          onChange={changeHandler}
        />
        <br />
        <br />

        <label>Cuisine Type:</label>
        <br />
        <input
          type="text"
          name="cuisineType"
          value={formData.cuisineType}
          onChange={changeHandler}
        />
        <br />
        <br />

        <label>Image Link:</label>
        <br />
        <input
          type="text"
          name="recipeImageUrl"
          value={formData.recipeImageUrl}
          onChange={changeHandler}
        />
        <br />
        <br />

        <label>Ingredients:</label>
        <br />
        <textarea
          name="ingredients"
          rows={2}
          cols={23}
          value={formData.ingredients}
          onChange={changeHandler}
        ></textarea>
        <br />
        <br />

        <label>Instructions:</label>
        <br />
        <textarea
          name="instructions"
          rows={2}
          cols={23}
          value={formData.instructions}
          onChange={changeHandler}
        ></textarea>
        <br />

        <button className="btn btn-primary my-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
