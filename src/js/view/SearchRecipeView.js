import View from "./View.js";

class SearchRecipeView extends View {
  _parentElement = document.querySelector(".search");

  querySearchRecipe() {
    const query = this._parentElement.querySelector(".search__field").value;

    this._parentElement.querySelector(".search__field").value = "";

    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchRecipeView();
