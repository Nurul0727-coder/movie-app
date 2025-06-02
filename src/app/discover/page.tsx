"use client";

import { SearchResults } from "@/components/search/search-result";
import { FilterGenre } from "./search-filter";
import { Header } from "@/components/header";

export default function DiscoverPage() {
  return (
    <div className=" min-h-screen w-full space-y-4">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside>
          <FilterGenre />
        </aside>

        <main className="md:col-span-3">
          <SearchResults />
        </main>
      </div>
    </div>
  );
}
