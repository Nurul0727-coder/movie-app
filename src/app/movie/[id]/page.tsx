import { CiPlay1 } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { Footer } from "@/components/Footer";

type Props = {
  params: { id: string };
};

export default async function MovieDetail({ params }: Props) {
  const { id } = params;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=f39690f9830ce804b7894ac1def4f7e9&language=en-US&append_to_response=credits`
  );
  if (!response.ok) throw new Error("Failed to fetch movie details");

  const data = await response.json();

  const videoRes = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=f39690f9830ce804b7894ac1def4f7e9&language=en-US`
  );
  const videoData = await videoRes.json();

  const trailer = videoData.results.find(
    (vid: any) => vid.type === "Trailer" && vid.site === "YouTube"
  );
  const trailerKey = trailer?.key;

  const director = data.credits.crew.find(
    (person: any) => person.job === "Director"
  );

  const writer = data.credits.crew.find(
    (person: any) =>
      person.job === "Writer" ||
      person.job === "Screenplay" ||
      person.job === "Author"
  );

  const stars = data.credits.cast.slice(0, 5);

  const similarRes = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=f39690f9830ce804b7894ac1def4f7e9&language=en-US&page=1`
  );
  const similarData = await similarRes.json();
  const similarMovies = similarData.results.slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-muted-foreground mb-4">
        {data.release_date} • {data.runtime} мин
      </p>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
          className="rounded-lg w-full md:w-[300px] h-auto object-cover"
        />

        <div className="relative w-full md:w-[860px] h-[468px] rounded-lg overflow-hidden cursor-pointer group">
          {trailerKey ? (
            <>
              <img
                src={`https://img.youtube.com/vi/${trailerKey}/hqdefault.jpg`}
                alt="Trailer Thumbnail"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 flex items-center space-x-3 bg-white bg-opacity-90 rounded-full px-4 py-2 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CiPlay1 className="w-6 h-6" />
                <span className="font-semibold">Play trailer</span>
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white rounded-lg">
              No trailer thumbnail available
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <div className="mt-6 mb-7">
          <div className="flex flex-wrap gap-2 mb-4">
            {data.genres.map((g: any) => (
              <span
                key={g.id}
                className="border border-gray-400 rounded-full px-3 py-1 text-sm font-medium"
              >
                {g.name}
              </span>
            ))}
          </div>
          <p className="text-[#09090B] font-normal text-base">
            {data.overview}
          </p>
        </div>

        <div className="flex">
          <h2 className="text-base font-bold">Director</h2>
          <p className="ml-[60px] mt-[2px]">
            {director ? director.name : "N/A"}
          </p>
        </div>
        <div className="border border-border "></div>

        <div className="flex">
          <h2 className="text-base font-bold">Writers</h2>
          <p className="ml-[68px] mt-[2px]">{writer ? writer.name : "N/A"}</p>
        </div>
        <div className="border border-border "></div>

        <div className="flex">
          <h2 className="text-base font-bold">Stars</h2>
          <p className="ml-[87px] mb-[2px]">
            {stars.map((star: any) => star.name).join(", ")}
          </p>
        </div>
        <div className="border border-border "></div>
      </div>

      <div className="flex justify-between items-center mt-10 mb-6">
        <div className="font-semibold text-2xl">More like this</div>
        <Link
          href={`/movie/${id}/similar`}
          className="font-normal text-lg flex gap-2 underline hover:underline cursor-pointer"
        >
          See more
          <FaArrowRight className="mt-1" />
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-5 gap-4">
        {similarMovies.map((movie: any) => (
          <div
            key={movie.id}
            className="w-full rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer flex flex-col"
            style={{ maxWidth: "220px" }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="w-[220px] h-[370px] object-cover rounded-t-lg"
            />
            <div className="p-2 bg-gray-100 dark:bg-gray-600 flex flex-col flex-grow">
              <div className="text-black font-medium text-sm gap-2">
                ⭐{movie.vote_average.toFixed(1)} / 10
              </div>
              <div
                className="font-normal text-lg mb-1 overflow-hidden"
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
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
