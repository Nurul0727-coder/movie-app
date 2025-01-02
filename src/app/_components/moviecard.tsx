import Link from "next/link";
import { Movie } from "../type";
import { TiStarFullOutline } from "react-icons/ti";


const MovieCard = ({ movie }: { movie: Movie }) => {

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="rounded-lg bg-gray-100">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="rounded-t-lg"
        />
        <div className="p-2">
          <div className="flex items-center">
            <TiStarFullOutline size={16} className="text-yellow-300" />
            <p>{movie.vote_average?.toFixed(1) ?? 'N/A'}</p>
            <p className="text-[#71717A]">/10</p>
          </div>
          <p>{movie.title}</p>
        </div>
      </div>
    </Link>
  );
};
export { MovieCard };

