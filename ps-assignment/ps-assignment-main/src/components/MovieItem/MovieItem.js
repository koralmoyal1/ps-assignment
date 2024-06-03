import React from 'react';

function MovieItem({ movie, onMovieSelect, onImageClick }) {
  const handleClick = () => {
    onImageClick(movie.imageSrc);
    onMovieSelect(movie);
  };

  return (
    <div key={movie.episode_id} style={{ margin: '10px', textAlign: 'center', color: '#fff' }}>
      <button
        onClick={handleClick}
        style={{
          backgroundImage: `url(${movie.imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '150px',
          height: '225px',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '11px',
          padding: '10px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            
            bottom: 0,
            width: '100%',
            height: '30px',
            backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent background
            backdropFilter: 'blur(3px)', // Blur effect
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
        <b>{movie.title} </b>
        </div>
      </button>
    </div>
  );
}

export default MovieItem;
