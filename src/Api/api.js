import axios from "axios";

const getCountries = () => {
  return axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

export { getCountries };
