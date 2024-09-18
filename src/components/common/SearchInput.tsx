import React, { ChangeEvent } from "react";
import useSearchStore from "@/lib/store/useSearchStore";

// Debounce utility function
const debounce = (
  func: (e: ChangeEvent<HTMLInputElement>) => void,
  delay: number
) => {
  let timer: NodeJS.Timeout;
  return (e: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(e), delay);
  };
};

const SearchInput: React.FC = () => {
  const { setSearchTerm } = useSearchStore();

  const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.trim());
  }, 300);

  return (
    <div className="w-full max-w-2xl mb-6">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search by title or location..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:border-blue-600 transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300 dark:border-r-zinc-700"
      />
    </div>
  );
};

export default SearchInput;
