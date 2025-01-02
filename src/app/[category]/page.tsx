
"use client";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { PaginationControls } from "../_components/paginationControls";
import { MovieCard } from "../_components/moviecard";
import { PageInfo } from "../_components/paginationControls";
import { Movie } from "../type";
import { options } from "../api";

export default function Page() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Number(searchParams.get("page") || 1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    totalPages: 0,
    currentPage: page,
  });

  const category = params.category || "popular"; 

  useEffect(() => {
    if (!category) {
      router.push("/404"); 
    }

    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`,
        options
      );
      const data = await response.json();
      setMovies(data.results || []);
      setPageInfo({ currentPage: page, totalPages: data.total_pages || 1 });
    };

    fetchMovies();
  }, [page, category, router]); 

  return (
    <>
      <h1 className="font-bold">{category}</h1>
      <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
      <PaginationControls pageInfo={pageInfo} />
    </>
  );
}
