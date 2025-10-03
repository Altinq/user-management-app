import React from "react";
import searchIcon from "../assets/search-icon.png";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="relative w-full max-w-xl mx-auto mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "Search by name or email"}
        className="
          w-full
          p-3
          pl-10
          border
          border-gray-300
          rounded-lg
          shadow-sm
          placeholder-gray-400
          focus:outline-none
          focus:border-blue-500
          focus:ring-1
          focus:ring-blue-500
          transition
          duration-200
        "
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
};

export default SearchBar;
