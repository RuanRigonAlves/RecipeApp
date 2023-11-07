export default class View {
  _data;

  setData(data) {
    this._data = data;
  }

  render(data) {
    // this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="./src/img/icons.svg#icon-loader"></use>
      </svg>
    </div>
    `;

    this._parentElement.innerHTML = "";

    this._parentElement.innerHTML = markup;
  }
}
