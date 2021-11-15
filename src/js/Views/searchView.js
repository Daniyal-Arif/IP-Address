class SearchView {
  _parentElement = document.querySelector(".form");

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      console.log(e);
      handler();
    });
  }
}

export default new SearchView();
