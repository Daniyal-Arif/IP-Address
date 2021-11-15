import L from "leaflet/dist/leaflet";
import * as model from "./model.js";
import searchView from "./Views/searchView.js";

require("dotenv").config();

const controlPageLoad = async function () {
  try {
    // get current location
    model.getCurrentLocation();
    // load data of current location
    await model.loadCurrentLocation();

    // render UI of current location
    mapView.render(model.state.coords);
  } catch (err) {
    console.log(err);
  }
};

model.getCurrentLocation();

const init = function () {
  // searchView.addHandlerSearch(controlPageLoad);
  controlPageLoad();
};

init();
