import { Link } from "react-router-dom";
import type { User } from "../types/User";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Link to={`/user/${user.id}`} className="block">
      <div className="bg-white border text-center border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
            {user.name}
          </h2>
          <p className="text-gray-600 mb-1">{user.email}</p>
          {user.company && (
            <p className="text-sm text-gray-500">{user.company.name}</p>
          )}
        </div>
        <span className="mt-4 inline-block text-blue-500 text-sm hover:underline">
          View Details →
        </span>
      </div>
    </Link>
  );
};

export default UserCard;
