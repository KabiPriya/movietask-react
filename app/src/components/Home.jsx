import React, { useState } from 'react';

function Home({ movies }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = () => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <h2>Movie List</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by movie title..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="movie-cards">
        {filteredMovies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
