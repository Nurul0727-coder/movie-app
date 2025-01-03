"use client"

import { useSearchParams } from "next/navigation";


export default function Page() {
const searchParams = useSearchParams();
const genreId = searchParams.get('with_genres')
  return (
    <div>
      Genre result {genreId}
    </div>
  );
}
