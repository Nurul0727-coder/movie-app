"use client";

import { Badge } from "@/components/ui/badge";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { options } from "@/constands/api";
import { GenreType } from "@/constands/type";
import Link from "next/link";
import { useState, useEffect } from "react";

export const FilterGenre = () => {
  const [genres, setGenres] = useState<GenreType[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <Popover>
      <PopoverTrigger>
        <div className="border rounded-lg p-2 w-[115px] flex justify-around items-center">
          Genre
          <RiArrowDropDownLine className="w-5 h-5" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[540px] max-h-[310px] overflow-y-auto p-4 space-y-4">
        <div>
          <h1 className="font-semibold text-xl">Genres</h1>
          <p className="text-sm text-gray-500">See lists of movies by genre</p>
        </div>
        {loading ? (
          <p className="text-sm text-gray-500">Loading...</p>
        ) : genres.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <Link
                href={`/discover?with_genres=${genre.id}`}
                key={`genre-${genre.id}-link`}
              >
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-indigo-200 transition"
                >
                  {genre.name}
                </Badge>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-red-500">No genres found.</p>
        )}
      </PopoverContent>
    </Popover>
  );
};
