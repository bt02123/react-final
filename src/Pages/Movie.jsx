import React from "react";
import "./Movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Movie = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate("/")
    }
  return (
    <>
      <div className="movie-container">
        <div className="movie-full">
          <div className="movie-full__poster">
            <img
              className="movie-full__img"
              src="https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"
              alt="Poster not found"
            />
          </div>
          <div className="movie-info__container">
            <div className="movie-full__info">
              <div className="movie-full__title">Fast Five</div>
              <div className="movie-full__year">
                <b>Released: </b>2011
              </div>
              <div className="movie-full__rating">
                <b>Rating: </b>PG-13
              </div>
              <div className="movie-full__runtime">
                <b>Length: </b>107 mins
              </div>
              <div className="movie-full__actors">
                <b>Starring: </b>Vin Diesel, Paul Walker, Michelle Rodriguez
              </div>
              <div className="movie-full__plot">
                <b>Plot: </b>Brian O'Conner, back working for the FBI in Los
                Angeles, teams up with Dominic Toretto to bring down a heroin
                importer by infiltrating his operation.{" "}
              </div>
              <div className="movie-full__director">
                <b>Directed by: </b>Justin Lin
              </div>
              <div className="movie-full__plot">
                <b>Written by: </b>Chris Morgan, Gary Scott Thompson
              </div>
              <div className="movie-full__genre">
                <b>Genre: </b>Action, Thriller
              </div>
              <div className="movie-full__critics">
                <b>Rotten Tomatoes: </b>28%
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
    </>
  );
};

export default Movie;
