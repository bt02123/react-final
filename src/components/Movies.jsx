import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Movies = () => {
  const { text } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState(text || "");
  
  console.log(goToMovie);
  async function fetchMovies(searchText) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${searchText}&page=1&apikey=f8e01cdb`
    );
    setMovies(data.Search);
    console.log(movies);
  }

  useEffect(() => {
    fetchMovies("Christmas");
  }, []);
  console.log(searchText);
  return (
    <div>
      <div id="movies">
        <div className="container">
          <div className="movies__row">
            <div className="movies__title">
              <h2 className="results__title">Search results:</h2>
              <select id="filter" className="filter__movies">
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
                <div className="movie">
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
  );
};

export default Movies;
