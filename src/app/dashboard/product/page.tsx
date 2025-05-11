"use client";
import { useEffect, useState } from "react";
import getProducts, { ProductResponse } from "./service";
import Pagination from "@/widgets/ui/pagination";
import Dropdown from "@/widgets/components/dropdown";
import SearchBar from "@/widgets/components/searchbar";

export default function ProductPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [content, setContent] = useState<ProductResponse>();

  const searchHandler = (value: string) => {
    setQuery(value);
    console.log("Search Query:", value);
  };

  useEffect(() => {
    const result = getProducts(page, limit);
    setContent(result);
  }, [page, limit]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  return (
    <div className="flex flex-col gap-4">
      {/* Header Controls */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <button className="text-white bg-blue-500 px-1 py-0.5 rounded-sm hover:bg-blue-600 transition">
            <i className="ri-add-circle-fill text-base"></i>
          </button>
          <button className="text-white bg-blue-500 px-1 py-0.5 rounded-sm hover:bg-blue-600 transition">
            <i className="ri-file-pdf-2-fill text-base"></i>
          </button>
          <button className="text-white bg-blue-500 px-1 py-0.5 rounded-sm hover:bg-blue-600 transition">
            <i className="ri-file-excel-2-fill text-base"></i>
          </button>
          <button className="text-white bg-blue-500 px-1 py-0.5 rounded-sm hover:bg-blue-600 transition">
            <i className="ri-printer-fill text-base"></i>
          </button>
          <Dropdown
            options={["10", "15", "20", "25"]}
            onSelect={(val) => setLimit(parseInt(val))}
            placeholder="Show"
          />
        </div>
        <SearchBar placeholder="Search..." onSearch={searchHandler} />
      </div>

      {/* Table Content */}
      <div className="bg-white shadow-sm rounded-sm p-2 border border-neutral-200">
        <table className="w-full text-sm border-collapse rounded-md overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-blue-500 text-left text-white text-xs">
              <th className="px-4 py-2 font-semibold">No.</th>
              <th className="px-4 py-2 font-semibold">Product Code</th>
              <th className="px-4 py-2 font-semibold">Category Id</th>
              <th className="px-4 py-2 font-semibold">Name</th>
              <th className="px-4 py-2 font-semibold"></th>
            </tr>
          </thead>
          <tbody>
            {content?.products.length ? (
              content.products.map((product, index) => (
                <tr
                  key={product.id}
                  className={`hover:bg-neutral-200 transition-all duration-300 ${
                    index % 2 === 0 ? "bg-white" : "bg-blue-50"
                  }`}
                >
                  <td className="px-4 py-2 text-xs text-neutral-800">
                    {(page - 1) * limit + index + 1}
                  </td>
                  <td className="px-4 py-2 text-xs text-neutral-800">
                    {product.code}
                  </td>
                  <td className="px-4 py-2 text-xs text-neutral-800">
                    {product.categoryId}
                  </td>
                  <td className="px-4 py-2 text-xs text-neutral-800">
                    {product.name}
                  </td>
                  <td className="flex items-center text-xs text-neutral-800 max-w-[2rem] gap-2 p-1">
                    <button
                      className="bg-yellow-500 hover:bg-yellow-700 text-white px-1.5 py-2 rounded-sm text-xs"
                      onClick={() => console.log("Edit clicked", product.id)}
                    >
                      <i className="ri-edit-2-fill ri-lg"></i>
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-1.5 py-2 rounded-sm text-xs"
                      onClick={() => console.log("Delete clicked", product.id)}
                    >
                      <i className="ri-delete-bin-6-fill ri-lg"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center text-neutral-500 py-4">
                  No data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {content?.meta && (
          <Pagination
            page={page}
            limit={limit}
            total={content.meta.total}
            totalPages={content.meta.totalPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
