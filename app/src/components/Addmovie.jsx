import React, { useState } from 'react';

function AddMovie({ onAddMovie }) {
  const [movie, setMovie] = useState({ image: '', title: '', year: '', rating: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(movie);
    setMovie({ image: '', title: '', year: '', rating: '' });
  };

  return (
    <div className="container">
      <h2>Add a Movie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie-image">Image URL:</label>
        <input
          type="text"
          id="movie-image"
          name="image"
          value={movie.image}
          onChange={handleChange}
          required
        />
        <label htmlFor="movie-title">Title:</label>
        <input
          type="text"
          id="movie-title"
          name="title"
          value={movie.title}
          onChange={handleChange}
          required
        />
        <label htmlFor="movie-year">Year:</label>
        <input
          type="number"
          id="movie-year"
          name="year"
          value={movie.year}
          onChange={handleChange}
          required
        />
        <label htmlFor="movie-rating">Rating:</label>
        <select
          id="movie-rating"
          name="rating"
          value={movie.rating}
          onChange={handleChange}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          {/* Add more rating options as needed */}
        </select>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
