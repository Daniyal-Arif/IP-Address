export const state = {
  data: {},
  coords: [],
};

export const loadCurrentLocation = async function (
  ipAddress = "",
  domain = ""
) {
  try {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY}&ipAddress=${ipAddress}&domain=${domain}` //&ipAddress=8.8.8.8
    );
    const data = await res.json();
    if (!res.ok) {
      alert("please input valid ip address or domain");
      return;
    }

    state.data = {
      ip: data.ip,
      location: `${data.location.city} ${data.location.region} ${data.location.postalCode}`,
      timezone: data.location.timezone,
      isp: data.isp,
    };
    state.coords = [data.location.lat, data.location.lng];
  } catch (err) {
    console.log(err);
  }
};
