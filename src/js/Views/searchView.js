class SearchView {
  _parentElement = document.querySelector(".form");

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  getQuery() {
    const query = document.querySelector(".input-text").value;
    return query;
  }
}

export default new SearchView();
