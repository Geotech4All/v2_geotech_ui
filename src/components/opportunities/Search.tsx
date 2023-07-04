"use client";
import { Button } from "@mui/material";
import React from "react";
import { CiSearch } from "react-icons/ci";

interface SearchProps {
  onSearch?: (search?: string) => void;
}

export default function Search(props: SearchProps) {
  const { onSearch } = props;
  const searchRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleSearch = () => {
    onSearch && onSearch(searchRef.current.value);
  };

  return (
    <div className="w-full items-center pl-3 rounded p-1 flex transition focus-within:shadow-black/30 shadow gap-3">
      <CiSearch size={25} />
      <input
        ref={searchRef}
        className="w-full outline-none"
        placeholder="Search Opportunity"
        type="text"
      />
      <Button
        onClick={handleSearch}
        size="small"
        className="whitespace-nowrap bg-green-600"
        variant="contained"
        color="success"
        type="button"
      >
        Find
      </Button>
    </div>
  );
}
