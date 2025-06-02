"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { options } from "@/constands/api";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export const SearchResults = () => {
  const searchParams = useSearchParams();
  const genreId = searchParams.get("with_genres");

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!genreId) {
      setMovies([]);
      setLoading(false);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&language=en-US&page=1`,
          options
        );
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error("Failed to fetch movies", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [genreId]);

  if (loading) return <p>Loading...</p>;

  if (!genreId) return <p>Please select a genre to see movies.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="rounded shadow hover:shadow-lg overflow-hidden"
        >
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-[370px] object-cover"
          />
          <div className="p-2 text-center text-sm font-medium">
            {movie.title}
          </div>
        </div>
      ))}
    </div>
  );
};
