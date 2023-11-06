import View from "./View.js";

class RecipeView extends View {
  _parentElement = document.querySelector(".recipe");

  checkData() {
    return this._data;
  }

  _generateMarkup() {
    return `
    <!-- RECIPE -->
      <!-- FIGURE -->
      <figure class="recipe__fig">
        <img class="recipe__img" src="${this._data.image_url}" alt="" />
        <h1 class="recipe__title">${this._data.title}</h1>
      </figure>
      <!-- FIGURE -->

      <!-- RECIPE DETAILS -->
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon icon">
            <use href="src/img/icons.svg#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            this._data.servings
          }</span>
          <span class="recipe__info-text">servings</span>
        </div>
        <div class="recipe__info">
          <svg class="icon">
            <use href="src/img/icons.svg#icon-clock"></use>
          </svg>
          <span class="recipe__info-data">${this._data.cooking_time}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
      </div>
      <!-- RECIPE DETAILS -->

            <!-- RECIPE INGREDIENTS -->
            <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe Ingredients</h2>
            <ul class="recipe__ingredients-list">
            ${this.ingredientsMarkup()}
            </ul>
            </div>

            <!-- RECIPE INGREDIENTS -->

      <!-- RECIPE DIRECTIONS -->
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__direction-text">
          " This recipe was carefully designed and tested by "
          <span class="recipe__publisher">${this._data.publisher}</span>
          ". Please check out directions at their website. "
        </p>
        <a class="recipe__btn btn" href="${this._data.source_url}">
          <span>Directions</span>
          <svg class="search__icon icon">
            <use href="src/img/icons.svg#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
      <!-- RECIPE DIRECTIONS -->

    <!-- RECIPE -->
    `;
  }

  ingredientsMarkup() {
    const markup = this._data.ingredients
      .map((ing) => {
        return `<li class="recipe__ingredient">
          <svg class="recipe__icon icon">
            <use href="src/img/icons.svg#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${
            ing.quantity ? ing.quantity : ""
          }</div>
          <div class="recipe__description">
            <span class="recipe__unit">${ing.unit}</span>
            ${ing.description}
          </div>
        </li>`;
      })
      .join(" ");

    return markup;
  }
}

export default new RecipeView();
