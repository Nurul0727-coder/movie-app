"use client";

import { useState, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { MovieCard } from "./moviecard";
import { PaginationControls } from "./paginationControls";
import { Movie } from "../../constands/type";
import { options } from "../../constands/api";
import Link from "next/link";
import { HoverCard } from "@/components/ui/hover-card";

interface Props {
  title: string;
  endpoint: string;
}

export const Section = ({ title, endpoint }: Props) => {
  const [movies, setMovies] = useState<Movie[]>();
  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    totalPages: 1,
  });
  const [showPagination, setShowPagination] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=${pageInfo.currentPage}`,
        options
      );
      const data = await response.json();
      setMovies(data.results || []);
      setPageInfo({
        currentPage: pageInfo.currentPage,
        totalPages: data.total_pages || 1,
      });
    };
    fetchMovies();
  }, [pageInfo.currentPage, endpoint]);

  const handleSeeMoreClick = () => {
    setShowPagination(true);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex text-[20px] justify-between w-full h-[36px] my-3 ">
        <p className="font-semibold ml-10">{title}</p>

        <Link href={`${endpoint}`}>
          <div className="flex items-center gap-2 p-3 mt-[-12px] mr-10 hover:underline">
            <HoverCard>See more</HoverCard>
            <IoMdArrowForward className="w-[16px] h-[16px]" />
          </div>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-5 p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {showPagination && <PaginationControls pageInfo={pageInfo} />}
    </div>
  );
};
