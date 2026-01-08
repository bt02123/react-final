import React, { useState } from 'react';
import "./App.css";

let movies = [];

export async function loadMovies() {
    const searchInput = document.getElementById("searchInput");
    const searchText = searchInput.value.trim();
    if (!searchText) {
        alert("Please enter a movie title");
        return;
    }
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchText}&page=1&apikey=f8e01cdb `);
        const data = await response.json();
        console.log("API Response:", data); // 👈 check console output 
        if (data.Response === "True") {
            movies = data.Search;
            renderMovies();
        }
        else {
            document.querySelector(".movies").innerHTML = 'No results found';
        }
    }
    catch (error) {
        console.error("Fetch error:", error);
        document.querySelector(".movies").innerHTML = 'Error fetching movies. Check console';
    }
}


async function renderMovies(filter) {
    const movieWrapper = document.querySelector('.movies');

    movieWrapper.classList += ' movies__loading'

    if (!movies) {
        movies = await getMovies();
    }

    movieWrapper.classList.remove('movies__loading')


    if (filter === 'OLDEST_TO_NEWEST') {
        movies.sort((a, b) => a.Year - b.Year);
    }
    else if (filter === 'NEWEST_TO_OLDEST') {
        movies.sort((a, b) => b.Year - a.Year);
    }
    else if (filter === 'A_TO_Z') {
        movies.sort((a, b) => a.Title.localeCompare(b.Title));
    }
    else if (filter === 'Z_TO_A') {
        movies.sort((a, b) => b.Title.localeCompare(a.Title));
    }

    const moviesHtml = movies.map((movie) => {
        const poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image";
        return `<div class="movie">
            <div class="movie__poster">
                <img class="movie__img" src=${movie.Poster} alt='Poster not found'>
                </div>
            <div class="movie__info">
                <div class="movie__title">${movie.Title}</div>
                <div class="movie__year">${movie.Year}</div>
             </div>
        </div>`
    }).join('');
    movieWrapper.innerHTML = moviesHtml;
}

function filterMovies(event) {
    renderMovies(event.target.value)
}

renderMovies();


function getMovies() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                // {
                //     Title: "The Fast and the Furious",
                //     Year: "2001",
                //     imdbID: "tt0232500",
                //     Type: "movie",
                //     Poster: "https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg"
                // },
                // {
                //     Title: "Fast & Furious 6",
                //     Year: "2013",
                //     imdbID: "tt1905041",
                //     Type: "movie",
                //     Poster: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
                // },
                // {
                //     Title: "Fast Five",
                //     Year: "2011",
                //     imdbID: "tt1596343",
                //     Type: "movie",
                //     Poster: "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"
                // },
                // {
                //     Title: "Fast & Furious",
                //     Year: "2009",
                //     imdbID: "tt1013752",
                //     Type: "movie",
                //     Poster: "https://m.media-amazon.com/images/M/MV5BM2Y1YzhkNzUtMzhmZC00OTFkLWJjZDktMWYzZmQ0Y2Y5ODcwXkEyXkFqcGc@._V1_SX300.jpg"
                // },
                // {
                //     Title: "The Fast and the Furious: Tokyo Drift",
                //     Year: "2006",
                //     imdbID: "tt0463985",
                //     Type: "movie",
                //     Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
                // },
                // {
                //     Title: "2 Fast 2 Furious",
                //     Year: "2003",
                //     imdbID: "tt0322259",
                //     Type: "movie",
                //     Poster: "https://m.media-amazon.com/images/M/MV5BOTQzYzEwNWMtOTAwYy00YWYwLWE1NTEtZTkxOGQxZTM0M2VhXkEyXkFqcGc@._V1_SX300.jpg"
                // },
                // {
                //     Title: "Fast & Furious Presents: Hobbs & Shaw",
                //     Year: "2019",
                //     imdbID: "tt6806448",
                //     Type: "movie",
                //     Poster: "https://m.media-amazon.com/images/M/MV5BNmU4OTA5NGYtMTFjMS00MzgxLWFjNTMtYjdlMThlYzc4M2M4XkEyXkFqcGc@._V1_SX300.jpg"
                // },
                // {
                //     Title: "F9: The Fast Saga",
                //     Year: "2021",
                //     imdbID: "tt5433138",
                //     Type: "movie",
                //     Poster: "https://m.media-amazon.com/images/M/MV5BODJkMTQ5ZmQtNzQxYy00ZWNlLWI0ZGYtYjU1NzdiMjcyNDRmXkEyXkFqcGc@._V1_SX300.jpg"
                // },
                // {
                //     Title: "Fast X",
                //     Year: "2023",
                //     imdbID: "tt5433140",
                //     Type: "movie",
                //     Poster: "https://m.media-amazon.com/images/M/MV5BYzEwZjczOTktYzU1OS00YjJlLTgyY2UtNWEzODBlN2RjZDEwXkEyXkFqcGc@._V1_SX300.jpg"
                // },
                // {
                //     Title: "Fast Times at Ridgemont High",
                //     Year: "1982",
                //     imdbID: "tt0083929",
                //     Type: "movie",
                //     Poster: "https://m.media-amazon.com/images/M/MV5BMWM4NTc3N2YtMjk2Ny00MTRmLWE4YzItNTVhMTRlODVkNmE5XkEyXkFqcGc@._V1_SX300.jpg"
                // }
            ]);
        }, 1000);
    });
}