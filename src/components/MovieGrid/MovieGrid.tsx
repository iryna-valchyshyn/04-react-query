import type { Movie } from '../../types/movie';
import css from './MovieGrid.module.css';

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  return (
    <ul className={css.grid}>
      {movies.map(movie => (
        <li key={movie.id}>
          <div
            className={css.card}
            onClick={() => onSelect(movie)}
            role="button"
            tabIndex={0}
            onKeyDown={event => {
              if (event.key === 'Enter' || event.key === ' ') {
                onSelect(movie);
              }
            }}
          >
            {movie.poster_path ? (
              <img
                className={css.image}
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
            ) : (
              <div className={css.noImage}>No poster</div>
            )}
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}