type Props = {
    params: { id: string };
  };

  export default async function MovieDetail({ params }: Props) {
    const { id } = await params;

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=f39690f9830ce804b7894ac1def4f7e9`
          );
          if (!response.ok) {
            throw new Error('Failed to fetch movie details');
          }
          const data = await response.json();
          return (
            <div>
              <h1>{data.title}</h1>