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
    startPage = Math.max(1, maxPages - 5);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return pages;
};

export const PaginationControls = ({ pageInfo }: { pageInfo: PageInfo }) => {
  const { currentPage, totalPages } = pageInfo;
  const searchParams = useSearchParams();
  const pathname = usePathname()
  const router = useRouter();

  const onChangePage = (newPage: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", newPage.toString());
    router.push(`${pathname}?${newParams.toString()}`);
  };

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <div className="flex gap-4 mx-10">
      {currentPage > 1 && (
        <div onClick={() => onChangePage(currentPage - 1)} className="cursor-pointer">
          Prev
        </div>
      )}
      {visiblePages.map((page) => (
        <div
          key={page}
          onClick={() => onChangePage(page)}
          className={currentPage === page ? "font-semibold text-blue-500" : "cursor-pointer"}
        >
          {page}
        </div>
      ))}
      {currentPage < totalPages && (
        <div onClick={() => onChangePage(currentPage + 1)} className="cursor-pointer">
          Next
        </div>
      )}
    </div>
  );
};
