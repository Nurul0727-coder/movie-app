import Link from "next/link";
import { Movie } from "../../constands/type";
import { TiStarFullOutline } from "react-icons/ti";

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="rounded-lg bg-gray-100 dark:bg-gray-600 transition hover:scale-[1.02] duration-200">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="rounded-t-lg"
          alt={movie.title}
        />
        <div className="p-2">
          <div className="flex items-center gap-1">
            <TiStarFullOutline size={16} className="text-yellow-300" />
            <p className="text-black dark:text-white">
              {movie.vote_average?.toFixed(1) ?? "N/A"}
            </p>
            <p className="text-[#71717A] dark:text-gray-400">/10</p>
          </div>
          <p className="text-black dark:text-white font-medium">
            {movie.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export { MovieCard };
