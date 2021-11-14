import L from "../node_modules/leaflet/dist/leaflet";

require("dotenv").config();

const AJAX = async function () {
  try {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${process.env.API_KEY}&ipAddress=8.8.8.8`
    );
    const data = res.json();
  } catch (err) {
    console.log(err);
  }
};

const mymap = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);

L.marker([51.5, -0.09])
  .addTo(mymap)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
