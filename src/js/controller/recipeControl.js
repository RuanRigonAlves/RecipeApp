import { callRecipe } from "../model/fetchRecipe.js";
import recipeView from "../view/recipeView.js";

export const controlRecipes = async function (
  recipeID = "5ed6604591c37cdc054bc886"
) {
  try {
    const recipe = await callRecipe();
    console.log(recipe);

    recipeView.setData(recipe);

    const check = recipeView.checkData();
    console.log(check);

    const recipeMarkup = recipeView._generateMarkup();
    recipeView.render(recipeMarkup);
  } catch (err) {}
};

controlRecipes();
