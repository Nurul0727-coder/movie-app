export type Movie = {
  title: string;
  id: number;
  vote_average: number;
  poster_path: string;
  release_date: string;
  overview: string;
  backdrop_path: string;
};

export type PageInfo = {
  currentPage: number;
  totalPages: number;
};
export type GenreType = {
  id: number;
  name: string;
};
