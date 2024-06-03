import React from 'react';

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
    if (!movie) return null;
  
    return (
      <div>
        <p><strong>Episode:</strong> {movie.episode_id}</p>
        <button onClick={() => onFavoriteToggle(movie)}>
          {favorites.some(fav => fav.episode_id === movie.episode_id) ?"Dislike 👎 " : "Like 👍"}
        </button>
      </div>
    );
  }

export default MovieDetails;