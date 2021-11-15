import View from "./View.js";

class ContentView extends View {
  _parentElement = document.querySelector(".main");

  _generateMarkup() {
    return `
    <div class="main-info">
    <h3>IP Address</h3>
    <p>${this._data.ip}</p>
  </div>
  <div class="main-info">
    <h3>Location</h3>
    <p>${this._data.location}</p>
  </div>
  <div class="main-info">
    <h3>Timezone</h3>
    <p>UTC${this._data.timezone}</p>
  </div>
  <div class="main-info">
    <h3>ISP</h3>
    <p>${this._data.isp}</p>
  </div>

        `;
  }
}

export default new ContentView();
