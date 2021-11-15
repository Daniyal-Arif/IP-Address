export const state = {
  data: {},
  coords: [],
};

export const getCurrentLocation = function () {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position);
      state.coords = [position.coords.latitude, position.coords.longitude];
      console.log(state.coords);
    },
    (error) => console.log(error)
  );
};

export const loadCurrentLocation = async function () {
  try {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${process.env.API_KEY}&ipAddress=8.8.8.8`
    );
    const data = res.json();
    if (!data) throw new Error("not available");

    state.data = data;
    console.log(state.data);
  } catch (err) {
    throw err;
  }
};
