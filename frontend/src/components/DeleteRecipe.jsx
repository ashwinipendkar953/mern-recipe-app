import React from "react";

const DeleteRecipe = ({ recipeId }) => {
  const deleteHandler = async (recipeId) => {
    try {
      const response = await fetch(
        `https://mern-recipe-api.vercel.app/recipes/${recipeId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw "Failed to delete recipe.";
      }

      const data = await response.json();
      if (data) {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button className="btn btn-danger" onClick={() => deleteHandler(recipeId)}>
      Delete
    </button>
  );
};

export default DeleteRecipe;
