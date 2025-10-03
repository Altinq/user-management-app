import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "../types/navItems";
import burgerMenu from "../assets/burger-menu.png";
import exitMenu from "../assets/exit.png";

interface NavbarProps {
  onAddUserClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAddUserClick }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = (path: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <nav className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-white">User Management</h1>
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path!}
                className={linkClasses(item.path!)}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={onAddUserClick}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
            >
              Add User
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md"
            >
              {isOpen ? (
                <img src={exitMenu} alt="" />
              ) : (
                <img src={burgerMenu} alt="" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path!}
              className={linkClasses(item.path!)}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => {
              onAddUserClick();
              setIsOpen(false);
            }}
            className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
          >
            Add User
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
