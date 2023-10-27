import React from "react";

function SortUser({ onSort }) {
  return (
    <div className="mb-4 lg:flex-row md:flex-col ">
      <label className="text-gray-500">Sort by Name:</label>
      <select onChange={(e) => onSort(e.target.value)} className="px-4 py-2 border rounded-md pt-2">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

export default SortUser;
