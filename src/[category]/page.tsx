
"use client";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { options } from "../components/section";
import { PaginationControls } from "../components/paginationControls";
import { MovieCard } from "../components/moviecard";
import { Movie } from "../components/type";
import { PageInfo } from "../components/paginationControls";

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

  const category = params.category || "popular"; // Default category: popular

  useEffect(() => {
    if (!category) {
      router.push("/404"); // Хэрэв category байхгүй бол 404 хуудсанд шилжих
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
  }, [page, category, router]); // `category` болон `page`-ийг хянаж байна

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
