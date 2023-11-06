import searchRecipeView from "../view/searchRecipeView.js";
import { recipedSearchedControl } from "./searchRecipeControl.js";
import { recipeResultsControl } from "./recipeResultsControl.js";
import ResultView from "../view/ResultView.js";

export const init = function () {
  searchRecipeView.addHandlerSearch(recipedSearchedControl);
  ResultView.addHandlerSearchResults(recipeResultsControl);
};
