import React from 'react';
import SearchIcon from '../Icons/SearchIcon';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <div className="relative w-full">
      {/* <SearchIcon stroke={"#000000"} height={24} width={24}/> */}
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
        <SearchIcon className="w-4 h-4" />
      </div>
      <input
      value={searchQuery}
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
        type="text"
        placeholder="Search for products, brands, or categories..."
        className="
              w-full 
              pl-10 pr-4 py-2
              rounded-full
              border border-gray-300
              bg-gray-50
              text-sm
              focus-outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:bg-white
              transition
              "
        />
    </div>
  );
};

export default SearchBar;