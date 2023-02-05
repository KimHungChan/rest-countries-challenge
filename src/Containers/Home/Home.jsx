import React, { useEffect, useState } from "react";
import { getCountries } from "../../Api/api";
import Filter from "../../Components/Filter/Filter";
import Navbar from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Countries from "../Countries/Countries";
import CountryPage from "../CountryPage/CountryPage";
import "./Home.scss";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [regionFilter, setRegionFilter] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

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

  const onCountryClick = (name) => {
    setSelectedCountry(name);
  };

  const filteredCountryData = searchValue
    ? countries.filter((country) => {
        return searchValue.toLowerCase() === ""
          ? country
          : country.name.common
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase());
      })
    : countries;

  const onBackClicked = () => {
    setSelectedCountry("");
  };

  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      {selectedCountry ? (
        <CountryPage
          country={selectedCountry}
          onBackClicked={onBackClicked}
          countryData={countries.find(
            (country) => country.name.common === selectedCountry
          )}
        />
      ) : (
        <>
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
            onCountryClick={onCountryClick}
          ></Countries>
        </>
      )}
    </div>
  );
};

export default Home;
