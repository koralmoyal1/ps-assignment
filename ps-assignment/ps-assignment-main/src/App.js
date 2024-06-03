// App.js

import React, { useState, useEffect } from 'react';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import MovieItem from '@/components/MovieItem/MovieItem';
import './App.css';

// Import your images
import img1 from "./assets/images/img1.jpg";
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';
import img5 from './assets/images/img5.jpg';
import img6 from './assets/images/img6.jpg';

const movies = [
  { episode_id: 1, title: 'The Phantom Menace', imageSrc: img4 },
  { episode_id: 2, title: 'A New Hope', imageSrc: img5 },
  { episode_id: 3, title: 'Attack of the Clones', imageSrc: img1 },
  { episode_id: 4, title: 'Revenge of the Sith', imageSrc: img2 },
  { episode_id: 5, title: 'The Empire Strikes Back', imageSrc: img6 },
  { episode_id: 6, title: 'Return of the Jedi', imageSrc: img3 },
];

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(movies[0].imageSrc); // Default background image

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }, [backgroundImage]);

  const handleFavorite = (movie) => {
    if (favorites.some(fav => fav.episode_id === movie.episode_id)) {
      setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const onFavoriteToggle = (movie) => {
    handleFavorite(movie);
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleImageClick = (imageSrc) => {
    setBackgroundImage(imageSrc);
  };

  return (
    <div className="App">
      <div
        className="background-blur"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="main-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="main-banner-title">
          {selectedMovie ? selectedMovie.title : 'Welcome to Star War! Select a Movie'}
          <MovieDetails
            movie={selectedMovie}
            favorites={favorites}
            onFavoriteToggle={onFavoriteToggle}
          />
        </div>
      </div>
      <div className="movie-thumbnails-container">
        <div className="movie-thumbnails">
          {movies.map(movie => (
            <MovieItem 
              key={movie.episode_id}
              movie={movie}
              onMovieSelect={handleMovieSelect}
              onImageClick={handleImageClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
