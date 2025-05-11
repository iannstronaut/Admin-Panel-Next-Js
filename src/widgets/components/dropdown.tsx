"use client";

import { useState, useRef, useEffect } from "react";

interface DropdownProps {
  options: string[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

export default function Dropdown({
  options,
  onSelect,
  placeholder = "Select",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-30 text-xs">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center bg-white border border-neutral-200 rounded-sm p-2 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selected || placeholder}
        <i
          className={`ri-arrow-down-s-line text-neutral-500 ml-2 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-neutral-200 rounded-sm shadow-md">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => handleSelect(opt)}
              className="px-3 py-2 hover:bg-blue-50 cursor-pointer transition text-neutral-700"
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
