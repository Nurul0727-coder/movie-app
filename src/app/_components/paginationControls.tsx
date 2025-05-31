"use client";

import { Footer } from "@/components/Footer";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export type PageInfo = {
  currentPage: number;
  totalPages: number;
};

const getVisiblePages = (currentPage: number, totalPages: number) => {
  const pages = [];
  const maxPages = Math.min(500, totalPages);
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(maxPages, currentPage + 2);

  if (currentPage <= 3) {
    endPage = Math.min(maxPages, 5);
  } else if (currentPage >= maxPages - 2) {
    startPage = Math.max(1, maxPages - 4);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
};

export const PaginationControls = ({ pageInfo }: { pageInfo: PageInfo }) => {
  const { currentPage, totalPages } = pageInfo;
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const onChangePage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", newPage.toString());
    router.push(`${pathname}?${newParams.toString()}`);
  };

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <>
      <div className="flex justify-end items-center gap-4 my-8 mr-10">
        {currentPage > 1 && (
          <div
            onClick={() => onChangePage(currentPage - 1)}
            className="cursor-pointerpx-2 px-3  py-1 rounded hover:bg-gray-200 "
          >
            Prev
          </div>
        )}

        {visiblePages.map((page) => (
          <div
            key={page}
            onClick={() => onChangePage(page)}
            className={`cursor-pointer px-2 py-1 rounded ${
              currentPage === page
                ? "bg-gray-300 text-white font-semibold"
                : "hover:bg-gray-200"
            }`}
          >
            {page}
          </div>
        ))}

        {currentPage < totalPages && (
          <div
            onClick={() => onChangePage(currentPage + 1)}
            className="cursor-pointer  px-4 py-1 rounded hover:bg-gray-200"
          >
            Next
          </div>
        )}
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </>
  );
};
