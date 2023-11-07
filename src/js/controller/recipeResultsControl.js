import ResultView from "../view/ResultView.js";
import { controlRecipes } from "./recipeControl.js";
import { state, selectedPage } from "../model/state.js";
import { callPage } from "./searchRecipeControl.js";

export const recipeResultsControl = function () {
  ResultView.getRecipeId(function (recipeID) {
    controlRecipes(recipeID);
  });

  ResultView.pagination(function (goTo) {
    ResultView._clear();

    callPage(goTo);
  });
};
