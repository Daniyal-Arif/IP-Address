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
