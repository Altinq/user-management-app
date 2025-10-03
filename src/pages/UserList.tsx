import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import AddUserModal from "../components/AddUserModal";
import { useUserStore } from "../store/useUserStore";
import downArrow from "../assets/down-arrow.png";
import upArrow from "../assets/up-arrow.png";
import type { User } from "../types/User";

const UserList: React.FC = () => {
  const { users, loading, fetchUsers } = useUserStore();
  const [showModal, setShowModal] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [sortField, setSortField] = useState<"name" | "email">("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    if (users.length === 0) fetchUsers();
  }, [users.length, fetchUsers]);

  if (loading) return <div>Loading users...</div>;

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchText.toLowerCase()) ||
      u.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const compareUsers = (a: User, b: User) => {
    const valA = a[sortField].toLowerCase();
    const valB = b[sortField].toLowerCase();

    if (valA < valB) return sortDirection === "asc" ? -1 : 1;
    if (valA > valB) return sortDirection === "asc" ? 1 : -1;
    return 0;
  };

  const sortedUsers = [...filteredUsers].sort(compareUsers);

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-4">
        <SearchBar
          value={searchText}
          onChange={setSearchText}
          placeholder="Search by name or email"
        />
        <label className="font-semibold">Sort by:</label>
        <select
          value={sortField}
          onChange={(e) => setSortField(e.target.value as "name" | "email")}
          className="border p-1 rounded"
        >
          <option value="name">Name</option>
          <option value="email">Email</option>
        </select>
        <button
          onClick={() =>
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
          }
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          <img
            src={sortDirection === "asc" ? upArrow : downArrow}
            alt={sortDirection === "asc" ? "Up Arrow" : "Down Arrow"}
            className="w-4 h-4"
          />
        </button>

        <button
          onClick={() => setShowModal(true)}
          className="ml-auto bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <AddUserModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default UserList;
