import View from "./View.js";

class ResultsView extends View {
  _searchResults = document.querySelector(".no-recipe-container");
  _parentElement = document.querySelector(".result");
  _pagination = document.querySelector(".pagination");
  _clicked = "";

  displaySearchResults(results) {
    results.forEach((result) => {
      const markup = `
            <li class="preview">
                <a class="preview__link" id="${result.id}">
                <figure class="preview__fig">
                    <img src="${result.image_url}" alt="" />
                </figure>
                <div class="preview__data">
                    <h4 class="preview__title">${result.title}</h4>
                    <p class="preview__publisher">${result.publisher}</p>
                </div>
                </a>
            </li>
            `;

      this._parentElement.insertAdjacentHTML("beforeend", markup);
    });
  }

  displayPagination(page, pages) {
    this._pagination.innerHTML = "";
    page = +page;
    pages = +pages;
    console.log(page, pages);
    if (page === 1 && pages > page) {
      this._pagination.insertAdjacentHTML(
        "afterbegin",
        this.nextPageMarkup(page)
      );
    }

    if (page >= 2 && pages > page) {
      this._pagination.insertAdjacentHTML(
        "afterbegin",
        this.bothPageMarkup(page)
      );
    }

    if (page === pages && pages > 1) {
      this._pagination.insertAdjacentHTML(
        "afterbegin",
        this.prevPageMarkup(page)
      );
    }
  }

  nextPageMarkup(page) {
    let markup = `
    <button class="btn--inline pagination__btn--next" data-page="${page + 1}">
      <span>Page ${page + 1}</span>
      <svg class="icon">
        <use href="/src/img/icons.svg#icon-arrow-right"></use>
      </svg>
    </button>
    `;
    return markup;
  }
  prevPageMarkup(page) {
    let markup = `
    <button class="btn--inline pagination__btn--prev" data-page="${page - 1}">
      <svg class="icon">
        <use href="/src/img/icons.svg#icon-arrow-left"></use>
      </svg>
      <span>Page ${page - 1}</span>
    </button>
    `;
    return markup;
  }

  bothPageMarkup(page) {
    const markup = `
    <button class="btn--inline pagination__btn--prev" data-page="${page - 1}">
      <svg class="icon">
        <use href="/src/img/icons.svg#icon-arrow-left"></use>
      </svg>
      <span>Page ${page - 1}</span>
    </button>

    <button class="btn--inline pagination__btn--next" data-page="${page + 1}">
      <span>Page ${page + 1}</span>
      <svg class="icon">
        <use href="/src/img/icons.svg#icon-arrow-right"></use>
      </svg>
    </button>
    `;
    return markup;
  }

  getRecipeId(callback) {
    this._parentElement.addEventListener("click", function (e) {
      const clickedRecipe = e.target.closest("li");

      if (!clickedRecipe) return;

      const recipeID = clickedRecipe.querySelector("a").id;

      callback(recipeID);
    });
  }

  pagination(callback) {
    this._pagination.addEventListener("click", function (e) {
      console.log(e);
      const clicked = e.target.closest("button");
      const attibuteValue = clicked.getAttribute("data-page");

      callback(attibuteValue);
    });
  }

  addHandlerSearchResults(handler) {
    handler();
  }

  noResultsFound(query) {
    console.log(this._searchResults);
    const markup = `
    <p class"recipe-not-found">Sorry i couldn't find any recipe: ${query}</p>
    `;
    this._searchResults.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new ResultsView();
