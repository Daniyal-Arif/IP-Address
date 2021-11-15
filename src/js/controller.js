import L from "leaflet/dist/leaflet";
import * as model from "./model.js";
import searchView from "./Views/searchView.js";
import mapView from "./Views/mapView.js";
import contentView from "./Views/contentView.js";

require("dotenv").config();

const controlPageLoad = async function () {
  try {
    // get current location
    model.getCurrentLocation();

    // load data of current location
    await model.loadCurrentLocation();

    // render UI of current location
    contentView.render(model.state.data);
    mapView.createMap(model.state.coords);
  } catch (err) {
    console.log(err);
  }
};

const controlSearchResults = async function () {};

const init = function () {
  // searchView.addHandlerSearch(controlPageLoad);
  controlPageLoad();
};

init();
