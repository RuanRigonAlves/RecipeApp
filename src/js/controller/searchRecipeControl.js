import { fetchSearchedRecipe } from "../model/fetchRecipe.js";
import searchRecipeView from "../view/searchRecipeView.js";
import { state, selectedPage } from "../model/state.js";
import ResultsView from "../view/ResultView.js";
import { init } from "./initHandlers.js";

export const recipedSearchedControl = async function () {
  try {
    const query = searchRecipeView.querySearchRecipe();

    await fetchSearchedRecipe(query);

    callPage();

    console.log(state);
  } catch (error) {
    console.log(error);
  }
};

export const callPage = function (page = 1) {
  state.page = page;

  ResultsView.displaySearchResults(selectedPage(page));

  ResultsView.displayPagination(state.page, state.pages);
};
