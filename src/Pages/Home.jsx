import React, { useEffect, useState } from "react";
import logo from "../Assets/cinevault-logo.png";
import banner from "../Assets/movies-banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useParams } from "react-router-dom";

const Home = () => {
//   const [filterMovies, setFilterMovies] = useState([]);
const { text } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState(text);
  async function fetchMovies(searchText) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchText}&page=1&apikey=f8e01cdb`
    );
    setMovies(data.Search);
    console.log(movies);
  }

  useEffect(() => {
    fetchMovies(searchText);
  }, []);
  console.log(searchText)

  return (
    <div>
      <div className="container">
        <div className="row__header">
          <div className="nav__bar">
            <figure className="logo__wrapper">
              <img src={logo} alt="Logo" className="logo" />
            </figure>
            <button className="contact">Contact Us</button>
          </div>
          <div className="content__wrapper">
            <h1 className="search__title">Search our Movies</h1>
            <div className="input__wrapper">
              <input
                id="searchInput"
                value={searchText}
                type="text"
                placeholder="Search by Title, Year, or Keyword"
              />
              <div className="search__wrapper">
                <button
                  className="fa-solid fa-magnifying-glass"
                  onClick={(searchText) =>
                    setSearchText(searchText.target.value)
                  }
                >
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="overlay">
              <img src={banner} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div id="movies">
        <div className="container">
          <div className="movies__row">
            <div className="movies__title">
              <h2 className="results__title">Search results:</h2>
              <select
                id="filter"
                onChange="filterMovies(event)"
                className="filter__movies"
              >
                <option value selected disabled>
                  Sort Movies
                </option>
                <option value="OLDEST_TO_NEWEST">Year: Oldest to Newest</option>
                <option value="NEWEST_TO_OLDEST">Year: Newest to Oldest</option>
                <option value="A_TO_Z">Alphabetically: A to Z</option>
                <option value="Z_TO_A">Alphabetically: Z to A</option>
              </select>
            </div>
            <div className="movies">
              <i className="fa-solid fa-spinner movies__loading--spinner"></i>
              {movies.map((m) => (
                <div class="movie">
                  <div class="movie__poster">
                    <img
                      class="movie__img"
                      src={m.Poster}
                      alt="Poster not found"
                    />
                  </div>
                  <div class="movie__info">
                    <div class="movie__title">{m.Title}</div>
                    <div class="movie__year">{m.Year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
