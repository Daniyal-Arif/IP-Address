import L from "leaflet/dist/leaflet";
import * as model from "./model.js";
import searchView from "./Views/searchView.js";
import mapView from "./Views/mapView.js";
import contentView from "./Views/contentView.js";

require("dotenv").config();

if (module.hot) {
  module.hot.accept();
}

const controlPageLoad = async function () {
  try {
    // load data of current location by default
    await model.loadCurrentLocation();

    // render UI of current location
    contentView.render(model.state.data);
    mapView.createMap(model.state.coords);
  } catch (err) {
    console.log(err);
  }
};

const controlSearchResults = async function () {
  const query = searchView.getQuery();

  // check if query is an ipAddress or domain
  if (checkQueryType(query)) {
    await model.loadCurrentLocation("", query);
  } else {
    await model.loadCurrentLocation(query);
  }

  // render UI of current location
  contentView.render(model.state.data);
  mapView.updateMap(model.state.coords);
};

const checkQueryType = function (query) {
  const regExp = /[a-zA-Z]/g;
  return regExp.test(query);
};

const init = function () {
  searchView.addHandlerSearch(controlSearchResults);
  controlPageLoad();
};

init();
