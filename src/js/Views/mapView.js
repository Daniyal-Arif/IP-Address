import L from "leaflet/dist/leaflet";
import View from "./View";

class MapView extends View {
  _parentElement = document.querySelector("#map");

  createMap(coords) {
    const mymap = L.map("map").setView(coords, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mymap);

    L.marker(coords)
      .addTo(mymap)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
  }
}

export default new MapView();
