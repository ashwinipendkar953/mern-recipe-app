import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Header from "./components/Header";
import AddRecipe from "./pages/AddRecipe";

export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipe/>}/>
      </Routes>
    </Router>
  );
}
