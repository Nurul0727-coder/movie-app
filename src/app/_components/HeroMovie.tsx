"use client";

import { useEffect, useState } from "react";
import { Movie } from "@/constands/type";
import { options } from "@/constands/api";
import Link from "next/link";
import { FaPlay, FaChevronRight } from "react-icons/fa";

export const HeroMovie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          options
        );
        const data = await res.json();
        setMovies(data.results.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 < movies.length ? prev + 1 : 0));
  };

  const movie = movies[currentIndex];
  if (!movie) return null;

  return (
    <div
      className="relative h-[550px] w-full bg-cover bg-center text-white transition-all duration-700"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <p className="text-lg mb-1">Now Playing:</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-2">{movie.title}</h1>
        <p className="text-yellow-400 font-semibold mb-7">
          ⭐ {movie.vote_average?.toFixed(1)}
        </p>
        <p className="max-w-xl text-sm md:text-base text-gray-200 mb-6 line-clamp-3">
          {movie.overview}
        </p>

        <Link
          href={`/movie/${movie.id}`}
          className="inline-flex items-center gap-2  bg-white text-black hover:bg-gray-300 transition px-6 py-2 rounded-md font-medium"
        >
          <FaPlay className="text-black" />
          Watch Trailer
        </Link>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white p-3 rounded-full z-20 transition"
      >
        <FaChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
