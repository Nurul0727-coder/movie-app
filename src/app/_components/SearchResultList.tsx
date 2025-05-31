"use client";

import { Card } from "@/components/ui/card";
import { options } from "@/constands/api";
import { Movie } from "@/constands/type";
import Link from "next/link";
import { useEffect, useState } from "react";

type SearchResultListProps = {
  searchValue: string;
};

export const SearchResultList = ({ searchValue }: SearchResultListProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchValue.trim()) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
            searchValue
          )}&language=en-US&page=1`,
          options
        );
        const data = await response.json();
        setMovies(data.results?.slice(0, 5) || []);
      } catch (error) {
        console.error("Failed to fetch search results", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchValue]);

  return (
    <div className="absolute top-16 md:top-14 w-full max-w-[577px] bg-background rounded-lg shadow-lg z-50">
      <div className="p-3 space-y-2">
        {loading ? (
          <p className="text-muted-foreground text-sm">Loading...</p>
        ) : movies.length > 0 ? (
          <>
            {movies.map((movie) => (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <Card className="cursor-pointer hover:bg-accent transition-colors flex items-center p-2">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                        : "/placeholder.png"
                    }
                    alt={movie.title}
                    className="w-[60px] h-[90px] rounded-md object-cover mr-4"
                  />
                  <div className="flex flex-col justify-between">
                    <h2 className="text-base font-semibold">{movie.title}</h2>
                    <p className="text-sm text-muted-foreground">
                      {movie.release_date || "N/A"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ⭐ {movie.vote_average?.toFixed(1) || "N/A"}
                    </p>
                    <span className="text-blue-500 text-sm hover:underline mt-1">
                      See more
                    </span>
                  </div>
                </Card>
              </Link>
            ))}

            <div className="pt-3 border-t">
              <Link
                href={`/search?query=${encodeURIComponent(searchValue)}`}
                className="py-2.5 px-4 text-sm text-muted-foreground hover:underline block"
              >
                See all results for &quot;{searchValue}&quot;
              </Link>
            </div>
          </>
        ) : (
          <p className="text-muted-foreground text-sm">
            No results for &quot;{searchValue}&quot;
          </p>
        )}
      </div>
    </div>
  );
};
