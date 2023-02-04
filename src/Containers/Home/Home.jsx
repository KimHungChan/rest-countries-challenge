import React, { useEffect, useState } from "react";
import { getCountries } from "../../Api/api";
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
      await getCountries().then((res) => {
        setCountries(res);
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
    ? countries.filter((country) => {
        return searchValue.toLowerCase() === ""
          ? country
          : country.name.common
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase());
      })
    : countries;

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
