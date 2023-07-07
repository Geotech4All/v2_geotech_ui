"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { twMerge } from "tailwind-merge";

interface SearchProps {
  className?: string;
  onSearch?: (search?: string) => void;
}

export default function Search(props: SearchProps) {
  const { onSearch, className } = props;
  const searchRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleSearch = () => {
    onSearch && onSearch(searchRef.current.value);
  };

  const handleKeyDown: React.KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className={twMerge(
        `
        w-full items-center p-1 flex border pl-3 rounded-3xl
        focus-within:border-black/30 transition-all
      `,
        className,
      )}
    >
      <input
        onKeyDown={handleKeyDown}
        ref={searchRef}
        className="w-full text-xl outline-none"
        placeholder="Search Opportunity"
        type="text"
      />
      <button
        onClick={handleSearch}
        className={`
            group flex items-center text-white text-xl font-medium
            pl-4 pr-2 gap-1 bg-zinc-800 p-1 rounded-3xl
        `}
      >
        <span>Find</span>
        <span className="group-hover:scale-105 aspect-square transition-all">
          <CiSearch size={25} />
        </span>
      </button>
    </div>
  );
}
