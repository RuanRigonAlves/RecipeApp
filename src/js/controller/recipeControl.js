import { callRecipe } from "../model/fetchRecipe.js";
import RecipeView from "../view/RecipeView.js";

export const controlRecipes = async function (recipeID) {
  try {
    RecipeView.renderSpinner();

    const recipe = await callRecipe(recipeID);
    console.log(recipe);

    RecipeView.setData(recipe);

    RecipeView.checkData();

    RecipeView.ingredientsMarkup();

    const recipeMarkup = RecipeView._generateMarkup();
    RecipeView.render(recipeMarkup);
  } catch (err) {}
};
