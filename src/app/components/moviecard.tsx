

import Link from "next/link";
import { Movie } from "./type";
import { TiStarFullOutline } from "react-icons/ti";

// // MovieCard компонент
// const MovieCard = ({ movie }: { movie: Movie }) => {
//   const imgPath = movie.poster_path ?? movie.backdrop_path ?? '';
// MovieCard компонент дотор:
const MovieCard = ({ movie }: { movie: Movie }) => {
  const s = 'some value'; // Жишээ болгон хувьсагчийг тодорхойлох
  console.log(s); // Эсвэл дебаг хийх үүднээс шалгаж болно
  return <div>{movie.title}</div>;
};


  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="rounded-lg bg-gray-100">
        <img
          src={`https://image.tmdb.org/t/p/w500/${imgPath}`}
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

// MovieCard компонентыг экспортлох
export { MovieCard };
s
