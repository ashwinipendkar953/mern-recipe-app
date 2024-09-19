const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    recipeImageUrl: {
      type: String,
      required: true,
    },
    recipeName: {
      type: String,
      required: true,
    },
    cuisineType: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        type: String,
        required: true,
      },
    ],
    instructions: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { timestamps: true },
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
