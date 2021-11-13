require("dotenv").config();

const AJAX = async function () {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=${process.env.API_KEY}&ipAddress=8.8.8.8`
  );
};
