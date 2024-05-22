import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import { getData } from "../api";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";

export function loader() {
  return getData("https://restcountries.com/v3.1/all");
}

const Home = () => {
  const [darkMode, setDarkMode] = useOutletContext();
  const data = useLoaderData();
  const [inputSearch, setInputSearch] = useState("");
  const [selectSearch, setSelectSearch] = useState("");

  const handleInputChange = (e) => {
    setInputSearch(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectSearch(e.target.value);
  };

  const resetFilters = () => {
    setInputSearch("");
    setSelectSearch("");
  };

  const countries = data
    .filter((item) =>
      item.name.common.toLowerCase().includes(inputSearch.toLowerCase())
    )
    .filter(
      (item) =>
        selectSearch === "" || selectSearch === item.region.toLowerCase()
    );

  return (
    <main className="bg">
      <div className="filter-container flex">
        <div>
          <label htmlFor="country" className="sr-only">
            Search for a country
          </label>
          <input
            className="search-input box-shadow"
            id="country"
            name="country"
            type="text"
            placeholder="Search for a country..."
            value={inputSearch}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <select
            className="filter-input box-shadow"
            name="region"
            id="region"
            defaultValue=""
            onChange={handleSelectChange}
          >
            <option disabled={true} value="">
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
            <option value="">All Countries</option>
          </select>
        </div>
      </div>
      <div className="country-container grid">
        {countries.length > 0 ? (
          countries.map((item, index) => (
            <div className="box-shadow country" key={index}>
              <Link to={item.cca3.toLowerCase()}>
                <div className="flag">
                  <img src={item.flags.svg} alt={item.name.common} />
                </div>
                <div className="country-info flow">
                  <h2>{item.name.common}</h2>
                  <p className="fw-bold">
                    Population:{" "}
                    <span className="fw-light">
                      {item.population.toLocaleString("en-US")}
                    </span>
                  </p>
                  <p className="fw-bold">
                    Region: <span className="fw-light">{item.region}</span>
                  </p>
                  <p className="fw-bold">
                    Capital: <span className="fw-light">{item.capital}</span>
                  </p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div>
            <h2>No country found</h2>
            <button onClick={resetFilters} className="btn">
              Reset filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
};
export default Home;
