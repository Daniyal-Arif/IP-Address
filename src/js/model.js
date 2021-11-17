export const state = {
  data: {},
  coords: [],
};

// export const getCurrentLocation = function () {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//       state.coords = [position.coords.latitude, position.coords.longitude];
//       console.log(state.coords);
//     },
//     (error) => console.log(error)
//   );
// };

export const loadCurrentLocation = async function (
  ipAddress = "",
  domain = ""
) {
  try {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY}&ipAddress=${ipAddress}&domain=${domain}` //&ipAddress=8.8.8.8
    );
    const data = await res.json();
    if (!data) throw new Error("not available");
    console.log(data);
    state.data = {
      ip: data.ip,
      location: `${data.location.city} ${data.location.region} ${data.location.postalCode}`,
      timezone: data.location.timezone,
      isp: data.isp,
    };
    state.coords = [data.location.lat, data.location.lng];
    console.log(state.coords);
  } catch (err) {
    throw err;
  }
};
