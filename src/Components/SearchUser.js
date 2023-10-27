import React, { useState, useEffect } from "react";

function SearchUser({ onSearch, onClearSearch, searchHistory }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setSearchTerm("");
  }, [onClearSearch]);

  return (
    <div className="mb-4 w-full">

    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border rounded-md md:w-64 w-32"
      />
      <button onClick={() => onSearch(searchTerm)} className="ml-1 md:px-1 md:py-2 py-[5px] px-[10px] text-xs md:text-sm bg-blue-500 hover:bg-blue-800 text-white rounded-md mt-3 md:w-64 w-32">
        Search
      </button>
      <button onClick={onClearSearch} className="ml-1 md:px-1 md:py-2 py-[5px] px-[10px] text-xs md:text-sm bg-red-500 hover:bg-red-800 text-white rounded-md mt-3 md:w-64 w-32">
        Clear Search
      </button>
       </div>

 

      <div className="mt-2">
        <span className="text-gray-500">Search History: </span>
        {searchHistory.map((term, index) => (
          <button
            key={index}
            className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md mx-1"
            onClick={() => setSearchTerm(term)}
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchUser;
