const express = require("express");
const cors = require("cors");
const Recipe = require("./models/recipe.model");
const { initializeDatabase } = require("./db/db.conn");

initializeDatabase();

const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello express");
});

// add recipes
async function createRecipe(recipe) {
  try {
    const newRecipe = new Recipe(recipe);
    const saveRecipe = await newRecipe.save();
    return saveRecipe;
  } catch (error) {
    throw error;
  }
}

app.post("/recipes", async (req, res) => {
  try {
    const savedRecipe = await createRecipe(req.body);
    if (savedRecipe) {
      res
        .status(200)
        .json({ message: "Recipe added successfully.", savedRecipe });
    } else {
      res.status(400).json({ message: "Failed to add recipe." });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get Recipes
app.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    if (recipes.length !== 0) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({ message: "Recipes not found." });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

// get recipe by id
app.get("/recipes/:recipeId", async (req, res) => {
  try {
    const recipe = await Recipe.findOne({ _id: req.params.recipeId });
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: "Recipe not found." });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

// delete recipe
app.delete("/recipes/:recipeId", async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.recipeId);
    if (deletedRecipe) {
      res.status(200).json({ message: "Recipe deleted successfully." });
    } else {
      res.status(400).json({ message: "Failed to delete recipe." });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
