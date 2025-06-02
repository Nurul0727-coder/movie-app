"use client";

import { Badge } from "@/components/ui/badge";
import { options } from "@/constands/api";
import { GenreType } from "@/constands/type";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";

export const FilterGenre = () => {
  const [genres, setGenres] = useState<GenreType[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?language=en",
          options
        );
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Failed to fetch genres", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGenres();
  }, []);

  const handleGenreClick = (genreId: number) => {
    router.push(`/discover?with_genres=${genreId}`);
  };

  return (
    <div className="p-4 rounded-lg max-h-[510px]  overflow-y-auto space-y-4 w-full">
      <div>
        <h1 className="font-semibold text-3xl mb-6">Search filter</h1>

        <h1 className="font-semibold text-xl mb-2">Genres</h1>
        <p className="text-sm text-[#09090B] mb-4">
          See lists of movies by genre
        </p>
      </div>
      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : genres.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <Badge
              key={`genre-${genre.id}`}
              variant="outline"
              onClick={() => handleGenreClick(genre.id)}
              className="cursor-pointer hover:bg-indigo-200 transition"
            >
              {genre.name}
            </Badge>
          ))}
        </div>
      ) : (
        <p className="text-sm text-red-500">No genres found.</p>
      )}
    </div>
  );
};
