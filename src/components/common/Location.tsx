"use client";
import React, { ChangeEvent, useState, useEffect } from "react";
import { useLocationStore } from "@/lib/store/Location";

// Famous Saudi cities
const cities = [
  "الرياض",
  "جدة",
  "الدمام",
  "مكة المكرمة",
  "المدينة المنورة",
  "الخبر",
  "أبها",
  "جازان",
  "تبوك",
  "العلا",
];

function Location() {
  const { searchTerm, setSearchTerm } = useLocationStore(); // Get search state
  const [filteredCities, setFilteredCities] = useState(cities); // Filtered cities

  // Update search
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue); // Save search term
    // Filter cities by lowercase and uppercase letters
    const filtered = cities.filter((city) =>
      city.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCities(filtered); // Update filtered cities
  };

  useEffect(() => {
    console.log("Select component rendered"); // Added console.log to test
  }, []);

  return (
    <>
       {/* Dropdown list */}
      <select
        className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-sm rounded-lg shadow-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-300 p-3 hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
        onChange={(e) => setSearchTerm(e.target.value.trim())}
      >
        {filteredCities.length > 0 ? (
          filteredCities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))
        ) : (
          <option disabled>No results</option>
        )}
      </select>
      {/* Search box */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="بحث بالمدينة"
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-gray-700 dark:text-gray-100"
      />
      
         
      
  
   


      </>

  );
}

export default Location;
