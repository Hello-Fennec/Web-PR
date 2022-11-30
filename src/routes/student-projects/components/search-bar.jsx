import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <>
      <div className="p-1 bg-gray-300 rounded-l-lg">🔍</div>
      <input
        id="search"
        type="text"
        placeholder="Find that one on your mind"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="w-80 h-8 bg-gray-200 focus:border-none p-2 rounded-none lg:w-full outline-none"
      />
      <button
        onClick={() => {
          document.getElementById("search").value = "";
          setSearchTerm("");
        }}
        className="bg-gray-200 rounded-r-lg py-1 px-2"
      >
        x
      </button>
    </>
  );
}
