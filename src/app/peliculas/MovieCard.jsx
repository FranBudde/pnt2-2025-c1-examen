import { useState } from 'react';

export default function MovieCard({ movie }) {
  const [imageError, setImageError] = useState(false);
  const [ like, setLike ] = useState(false)


  const handleImageError = () => {
    setImageError(true);
  };

  const handleLike = () => {
    setLike(prev => !prev)
  }

  return (
    <div className="w-[90px] text-center">
      {movie.poster && !imageError ? (
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="w-full h-[135px] object-cover rounded-md"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-[135px] bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-xs text-gray-600 text-center">{movie.title}</span>
        </div>
      )}
      <p className="text-xs mt-1 truncate">{movie.title}</p>
      <p className="text-xs mt-1 truncate">{movie.year}</p>
      <p className="text-xs mt-1 truncate">{movie.fullplot}</p>

      <button
        onClick={handleLike}
        className={`mt-2 px-2 py-1 rounded text-xs font-medium transition-colors ${
          like ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}
      >
        { like ? 'Me gusta' : 'No me gusta'}
      </button>

    </div>
  );
}