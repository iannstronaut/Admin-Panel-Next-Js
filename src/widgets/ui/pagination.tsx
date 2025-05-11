"use client";
import React from "react";

export interface PaginationProps {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  page,
  limit,
  total,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePrev = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  const generatePageNumbers = (): (number | "...")[] => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    const showLeftDots = page > 3;
    const showRightDots = page < totalPages - 2;

    if (!showLeftDots) {
      pages.push(1, 2, 3, "...", totalPages);
    } else if (!showRightDots) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <span className="text-xs text-neutral-600">
        Show {limit} of {total} items
      </span>
      <div className="flex items-center space-x-2">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <div className="flex gap-1">
          {generatePageNumbers().map((item, index) =>
            item === "..." ? (
              <span
                key={`dots-${index}`}
                className="text-xs text-gray-500 px-1.5"
              >
                ...
              </span>
            ) : (
              <button
                key={item}
                onClick={() => onPageChange(item)}
                className={`px-2 py-1 rounded text-xs ${
                  item === page
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-1 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          <i className="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
