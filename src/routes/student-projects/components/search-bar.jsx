import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <>
      <div className="p-1 bg-gray-300 rounded-l-lg">🔍</div>
      <input
        type="text"
        placeholder="Find that one on your mind"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="w-80 h-8 bg-gray-200 rounded-r-lg focus:border-none p-2 lg:w-full"
      />
    </>
  );
}
