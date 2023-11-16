import { fetchSearchedRecipe } from "../model/fetchRecipe.js";
import searchRecipeView from "../view/searchRecipeView.js";
import { state, selectedPage } from "../model/state.js";
import ResultsView from "../view/ResultView.js";
import { init } from "./initHandlers.js";
import ResultView from "../view/ResultView.js";

export const recipedSearchedControl = async function () {
  try {
    ResultsView.renderSpinner();
    const query = searchRecipeView.querySearchRecipe();

    const recipe = await fetchSearchedRecipe(query);

    if (!recipe.results) {
      ResultView._clear();
      ResultsView._searchResults.innerHTML = "";
      ResultView._pagination.innerHTML = "";

      ResultView.noResultsFound(query);
    } else {
      callPage();
    }

    console.log(state);
  } catch (error) {
    console.log(error);
  }
};

export const callPage = function (page = 1) {
  ResultsView._clear();
  ResultsView._searchResults.innerHTML = "";

  state.page = page;

  ResultsView.displaySearchResults(selectedPage(page));

  ResultsView.displayPagination(state.page, state.pages);
};

const noResultsFound = function () {
  console.log("no results");
};
