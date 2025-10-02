import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import type { User } from "../types/User";
import { getUsers } from "../services/useService";
import SearchBar from "../components/SearchBar";

interface UserListProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserList: React.FC<UserListProps> = ({ users, setUsers }) => {
  const [loading, setLoading] = useState(users.length === 0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (users.length === 0) {
      const fetchUsers = async () => {
        try {
          const data = await getUsers();
          setUsers(data);
        } catch (error) {
          console.error("Failed to fetch users", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUsers();
    } else {
      setLoading(false);
    }
  }, [users, setUsers]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search by name or email"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
