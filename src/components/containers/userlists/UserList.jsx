import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  // Filter users by search term (case-insensitive)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="antialiased subpixel-antialiased font-[700] text-[20px]">
        User List
      </h1>
      <div className="text-[16px] text-gray-500 mb-4">
        <div className="search-bar w-1/3 mb-4 pr-3">
          <input
            type="text"
            placeholder="Search users..."
            className="border border-gray-300 rounded p-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers?.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300 text-left"
          >
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">{user.phone}</p>
            <p className="text-gray-600">{user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
