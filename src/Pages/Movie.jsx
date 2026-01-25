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
    }, [id]);

    const rotten = movie?.Ratings?.find((r) => r.Source === "Rotten Tomatoes")?.Value || "N/A"
   return (
      <>
      {movie && (
        <div className="movie-container">
          <div className="movie-full">
            <div className="movie-full__poster">
              <img
                className="movie-full__img"
                src={movie.Poster}
                alt="Poster not found"
              />
            </div>
            <div className="movie-info__container">
              <div className="movie-full__info">
                <div className="movie-full__title">{movie.Title}</div>
                <div className="movie-full__year">
                  <b>Released: </b>{movie.Year}
                </div>
                <div className="movie-full__rating">
                  <b>Rated: </b>{movie.Rated}
                </div>
                <div className="movie-full__runtime">
                  <b>Length: </b>{movie.Runtime}
                </div>
                <div className="movie-full__actors">
                  <b>Starring: </b>{movie.Actors}
                </div>
                <div className="movie-full__plot">
                  <b>Plot: </b>{movie.Plot}
                </div>
                <div className="movie-full__director">
                  <b>Directed by: </b>{movie.Director}
                </div>
                <div className="movie-full__plot">
                  <b>Written by: </b>{movie.Writer}
                </div>
                <div className="movie-full__genre">
                  <b>Genre: </b>{movie.Genre}
                </div>
                <div className="movie-full__critics">
                  <b>Rotten Tomatoes: </b>{rotten}
                </div>
                <div className="streaming">
                  <b>Stream Here: </b>
                  <button className='stream-btn'>Netflix</button>, <button className='stream-btn'>Hulu</button>, <button className='stream-btn'>YouTube</button>, <button className='stream-btn'>HBO</button>
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
      )}
      </>
    );
  };
  
  export default Movie;