"use client";
import { FC, useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // opsional: bisa ubah ke debounce untuk optimasi
  };

  return (
    <div className="flex items-center bg-white border border-neutral-200 rounded-sm px-3 py-1.5 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-200">
      <i className="ri-search-line text-neutral-400 text-sm mr-2"></i>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch(query);
        }}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-xs text-neutral-800 placeholder-neutral-400"
      />
    </div>
  );
};

export default SearchBar;
