import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between mb-5">
      <h1 className="text-xl font-bold">User Management</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-300">
          Users
        </Link>
        <Link to="/add-user" className="hover:text-gray-300">
          Add User
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
