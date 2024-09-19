const DeleteRecipe = ({ recipeId }) => {
  const deleteHandler = async (recipeId) => {
    try {
      const response = await fetch(
        `https://b8130d2b-1e71-49fd-a65f-942326f87ed8-00-p9c3wsr4xudz.sisko.replit.dev/recipes/${recipeId}`,
        {
          method: "DELETE",
        },
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
