import { useEffect, useState } from "react";
import UserList from "./Components/UserList";
import SearchUser from "./Components/SearchUser";
import SortUser from "./Components/SortUser";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredUsers = data.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredData(filteredUsers);
    setSearchHistory((prevHistory) => [...prevHistory, searchTerm]);
  };

  const handleClearSearch = () => {
    setFilteredData(data);
  };

  const handleSort = (order) => {
    const sortedUsers = [...filteredData].sort((a, b) => {
      if (order === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setFilteredData(sortedUsers);
  };

  return (
    <div className="w-full">
      <div className="flex flex-row justify-evenly p-10 w-full">
        <SearchUser onSearch={handleSearch} onClearSearch={handleClearSearch} searchHistory={searchHistory} />
        <SortUser onSort={handleSort} />
      </div>
      <UserList users={filteredData} />
    </div>
  );
}

export default App;
