import React, { useEffect, useState } from "react";
import { getCountries } from "../../Api/api";
import countryData from "../../Api/responseData";
import Filter from "../../Components/Filter/Filter";
import Navbar from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Countries from "../Countries/Countries";
import "./Home.scss";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [regionFilter, setRegionFilter] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const awaitCountries = async () => {
      await getCountries().then((result) => {
        setCountries(result);
      });
    };
    awaitCountries();
  }, []);

  useEffect(() => {
    darkMode
      ? document.documentElement.setAttribute("data-theme", "dark")
      : document.documentElement.setAttribute("data-theme", "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const onRegionChange = (event) => {
    setRegionFilter(event.target.value);
  };

  const onSearch = (event) => {
    setSearchValue(event.target.value);
  };

  console.log("🚀 ~ file: Home.jsx:44 ~ Home ~ searchValue", searchValue);

  const filteredCountryData = searchValue
    ? countryData.filter((country) => {
        // console.log(
        //   "🚀 ~ file: Home.jsx:50 ~ ?countryData.filter ~ country.name.common.toLowerCase()",
        //   country.name.common.toLowerCase()
        // );
        // console.log(
        //   "🚀 ~ file: Home.jsx:50 ~ ?countryData.filter ~ country.name.common.toLowerCase().includes(searchValue)",
        //   country.name.common
        //     .toLowerCase()
        //     .includes(searchValue.toLocaleLowerCase())
        // );
        return searchValue.toLowerCase() === ""
          ? country
          : country.name.common
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase());
      })
    : countryData;

  console.log(
    "🚀 ~ file: Home.jsx:44 ~ Home ~ filteredCountryData",
    filteredCountryData
  );
  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="search-filter-container">
        <SearchBar darkMode={darkMode} onChange={onSearch}></SearchBar>
        <Filter onRegionChange={onRegionChange} />
      </div>
      <Countries
        countries={
          regionFilter
            ? filteredCountryData.filter(
                (country) => country.region === regionFilter
              )
            : filteredCountryData
        }
      ></Countries>
    </div>
  );
};

export default Home;
