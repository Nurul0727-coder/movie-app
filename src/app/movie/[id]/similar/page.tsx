import { Footer } from "@/components/Footer";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function SimilarMoviesPage({ params }: Props) {
  const { id } = await params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=f39690f9830ce804b7894ac1def4f7e9&language=en-US&page=1`
  );

  if (!res.ok) throw new Error("Failed to fetch similar movies");

  const data = await res.json();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
        More like this
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {data.results.map((movie: any) => (
          <Link
            key={movie.id}
            href={`/movie/${movie.id}`}
            className="rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer flex flex-col bg-gray-100 dark:bg-gray-600"
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[370px] object-cover rounded-t-lg"
            />
            <div className="p-2 flex flex-col flex-grow">
              <div className="text-black dark:text-white font-medium text-sm gap-2">
                ⭐{movie.vote_average.toFixed(1)} / 10
              </div>
              <div
                className="font-normal text-lg mb-1 overflow-hidden text-black dark:text-white"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                }}
                title={movie.title}
              >
                {movie.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}
