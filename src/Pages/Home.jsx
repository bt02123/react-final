import React, { useEffect, useState } from "react";
import logo from "../Assets/cinevault-logo.png";
import banner from "../Assets/movies-banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  // const [sortMovies, setSortMovies] = useState([data]);
  const { text } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState(text || "");
  const navigate = useNavigate();
  
  async function fetchMovies(searchText) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchText}&page=1&apikey=f8e01cdb`
    );
    setMovies(data.Search);
    console.log(movies);
    console.log(data)
  }
  const goToMovie = (e) => {
    // navigate(":id");
  console.log(e.currentTarget);
  };

  useEffect(() => {
    fetchMovies("Christmas");
  }, []);
  console.log(searchText);

  return (
    <>
      <Navbar />
      <div>
        <div className="content__wrapper">
          <h1 className="search__title">Search our Movies</h1>
          <div className="input__wrapper">
            <input
              id="searchInput"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search by Title, Year, or Keyword"
              onKeyPress={(event) =>
                event.key === "Enter" && fetchMovies(searchText)
              }
            />
            <div className="search__wrapper">
              <button
                className="fa-solid fa-magnifying-glass"
                onClick={() => fetchMovies(searchText)}
              >
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </button>
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
                  // onChange=
                  className="filter__movies"
                >
                  <option value selected disabled>
                    Sort Movies
                  </option>
                  <option value="OLDEST_TO_NEWEST">
                    Year: Oldest to Newest
                  </option>
                  <option value="NEWEST_TO_OLDEST">
                    Year: Newest to Oldest
                  </option>
                  <option value="A_TO_Z">Alphabetically: A to Z</option>
                  <option value="Z_TO_A">Alphabetically: Z to A</option>
                </select>
              </div>
              <div className="movies">
                <i className="fa-solid fa-spinner movies__loading--spinner"></i>
                {movies.map((m) => (
                  <div className="movie"
                   onClick={goToMovie}>
                    <div className="movie__poster">
                      <img
                        className="movie__img"
                        src={m.Poster}
                        alt="Poster not found"
                      />
                    </div>
                    <div className="movie__info">
                      <div className="movie__title">{m.Title}</div>
                      <div className="movie__year">{m.Year}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
