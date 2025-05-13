'use client'
import { useState, useEffect } from 'react';

export default function Top5Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          'https://mflixbackend.azurewebsites.net/api/movies?pageSize=10&page=1'
        );
        const json = await response.json();
        const allMovies = json.movies;

        const topMovies = allMovies
          .filter(m => m.imdb?.rating != null)
          .sort((a, b) => b.imdb.rating - a.imdb.rating)
          .slice(0, 5);

        setMovies(topMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Cargando...</p>;
  }

  return (
    <div className="space-y-2 p-4">
      {movies.map(movie => (
        <div key={movie._id} className="border p-2 rounded">
          <h3 className="font-semibold">{movie.title}</h3>
          <p className="text-xs">Rating: {movie.imdb.rating}</p>
        </div>
      ))}
    </div>
  );
}
