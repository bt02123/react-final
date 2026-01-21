import React, { useEffect, useState } from "react";
import "./Movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Movie = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [movie, setMovie] = useState([]);
    const goHome = () => {
        navigate("/")
    }

    async function fetchInfo() {
        const info = await axios.get(
            `https://www.omdbapi.com/?apikey=f8e01cdb&i=${id}`
        )
        setMovie(info.data)
        console.log(info.data)
    }

    useEffect(() =>{
        fetchInfo();
    }, []);

  return (
    <>
    {movie.map((m) => (
        <div className="movie-container">
        <div className="movie-full">
          <div className="movie-full__poster">
            <img
              className="movie-full__img"
              src={m.Poster}
              alt="Poster not found"
              />
          </div>
          <div className="movie-info__container">
            <div className="movie-full__info">
              <div className="movie-full__title">{m.Title}</div>
              <div className="movie-full__year">
                <b>Released: </b>{m.Year}
              </div>
              <div className="movie-full__rating">
                <b>Rated: </b>{m.Rated}
              </div>
              <div className="movie-full__runtime">
                <b>Length: </b>{m.Runtime}
              </div>
              <div className="movie-full__actors">
                <b>Starring: </b>{m.Actors}
              </div>
              <div className="movie-full__plot">
                <b>Plot: </b>{m.Plot}
              </div>
              <div className="movie-full__director">
                <b>Directed by: </b>{m.Director}
              </div>
              <div className="movie-full__plot">
                <b>Written by: </b>{m.Writer}
              </div>
              <div className="movie-full__genre">
                <b>Genre: </b>{m.Genre}
              </div>
              <div className="movie-full__critics">
                <b>Rotten Tomatoes: </b>{m.Ratings}
              </div>
              <div className="streaming">
                <b>Stream Here: </b>
                <a>Netflix</a>, <a>Hulu</a>, <a>YouTube</a>, <a>HBO</a>
              </div>
            </div>
          </div>
          <div className="close-container">
            <div className="close-tag" onClick={goHome}>
              Close <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </div>
          </div>
        </div>
      </div>
    ))}
    </>
  );
};

export default Movie;
