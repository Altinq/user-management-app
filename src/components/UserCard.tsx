import type { User } from "../types/User";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
      <h1 className="text-lg font-semibold text-gray-800">{user.name}</h1>
      <p className="text-gray-600">{user.email}</p>
      {user.company && (
        <p className="text-sm text-gray-500">{user.company.name}</p>
      )}
    </div>
  );
};

export default UserCard;
