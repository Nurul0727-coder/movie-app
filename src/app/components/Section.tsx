// 'use client';
// import { useState, useEffect } from "react";
// import { MovieCard } from "./moviecard";
// import { useSearchParams, useRouter } from "next/navigation";
// import { PaginationControls } from "./paginationControls"; 
// import { Movie } from "./type";
// import { IoMdArrowForward } from "react-icons/io";
// interface Props {
//   title: string;
//   endpoint: string;
// }
// export const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE', // Your API key remains unchanged
//   },
// };
// export const Section = ({ title, endpoint }: Props) => {
//   const searchParams = useSearchParams();
//   const currentPage = Number(searchParams.get('page') || 1); 
//   const [showPagination, setShowPagination] = useState(false);  
//   const [movies, setMovies] = useState<Movie[]>();
//   const [pageInfo, setPageInfo] = useState({
//     currentPage: currentPage,
//     totalPages: 500, 
//   });
//   const router = useRouter(); 
//   useEffect(() => {
//     const fetchMovies = async () => {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${endpoint}?page=${currentPage}`,
//         options
//       );
//       const data = await response.json();
//       const movies: Movie[] = data.results ? data.results.slice(0, 10) : [];
      
//       if (movies) {
//         setMovies(movies); 
//         setPageInfo({
//           currentPage,
//           totalPages: Math.min(data.total_pages, 500), 
//         });
//       }
//     };
//     fetchMovies();
//   }, [currentPage, endpoint]);  
//   const handleSeeMoreClick = () => {
//     setShowPagination(true); 
//   };
//   const handlePageChange = (page: number) => {
//     router.push(`?page=${page}`);
//   };
//   return (
//     <div className="flex flex-col items-center">
//       <div className="flex text-[24px] justify-between w-[335px] h-[36px] my-3">
//         <p className="font-semibold">{title}</p>
//         <div className="flex items-center gap-2 p-3">
//           <button className="text-[14px]" onClick={handleSeeMoreClick}>
//             See more
//           </button>
//           <IoMdArrowForward className="w-[16px] h-[16px]" />
//         </div>
//       </div>
    
//       <div className="flex flex-wrap justify-center gap-5 p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
//         {movies?.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//       {showPagination && (
//         <PaginationControls pageInfo={pageInfo} />
//       )}
//     </div>
//   );
// };
// import { useEffect, useState } from "react";
// import { MovieCard } from "./moviecard";
// import { PaginationControls } from "./paginationControls";
// import { Movie } from "./type";
// import { IoMdArrowForward } from "react-icons/io";

// interface Props {
//   title: string;
//   endpoint: string;
// }

// export const Section = ({ title, endpoint }: Props) => {
//   const [movies, setMovies] = useState<Movie[]>();
//   const [pageInfo, setPageInfo] = useState({
//     currentPage: 1,
//     totalPages: 1,
//   });
//   const [showPagination, setShowPagination] = useState(false);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/${endpoint}?page=${pageInfo.currentPage}`,
//         {
//           method: "GET",
//           headers: {
//             accept: "application/json",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE", // Replace with actual API key
//           },
//         }
//       );
//       const data = await response.json();
//       setMovies(data.results || []);
//       setPageInfo({
//         currentPage: pageInfo.currentPage,
//         totalPages: data.total_pages || 1,
//       });
//     };
//     fetchMovies();
//   }, [pageInfo.currentPage, endpoint]);

//   const handleSeeMoreClick = () => {
//     setShowPagination(true);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div className="flex text-[24px] justify-between w-[335px] h-[36px] my-3">
//         <p className="font-semibold">{title}</p>
//         <div className="flex items-center gap-2 p-3">
//           <button className="text-[14px]" onClick={handleSeeMoreClick}>
//             See more
//           </button>
//           <IoMdArrowForward className="w-[16px] h-[16px]" />
//         </div>
//       </div>

//       <div className="flex flex-wrap justify-center gap-5 p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-10">
//         {movies?.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//       {showPagination && <PaginationControls pageInfo={pageInfo} />}
//     </div>
//   );
// };
// src/app/components/section.tsx

// src/app/components/section.tsx
"use client";  // Энэ мөрийг нэмэх

import { useState, useEffect } from "react";  // useState, useEffect ашиглах
import { IoMdArrowForward } from "react-icons/io";  // Arrow icon-ыг ашиглах
import { MovieCard } from "./moviecard";  // MovieCard компонент
import { PaginationControls } from "./paginationControls";  // PaginationControls компонент
import { Movie } from "./type";  // Movie төрлийн өгөгдөл

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
        `https://api.themoviedb.org/3/movie/${endpoint}?page=${pageInfo.currentPage}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer f39690f9830ce804b7894ac1def4f7e9",  // API key-г зөв оруулна уу
          },
        }
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
      <div className="flex text-[24px] justify-between w-[335px] h-[36px] my-3">
        <p className="font-semibold">{title}</p>
        <div className="flex items-center gap-2 p-3">
          <button className="text-[14px]" onClick={handleSeeMoreClick}>
            See more
          </button>
          <IoMdArrowForward className="w-[16px] h-[16px]" />
        </div>
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

