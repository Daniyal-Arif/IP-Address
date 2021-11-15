import L from "leaflet/dist/leaflet";
import View from "./View.js";

class MapView extends View {
  _parentElement = document.querySelector("#map");

  createMap() {
    const mymap = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mymap);

    L.marker([51.5, -0.09])
      .addTo(mymap)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
  }
}
