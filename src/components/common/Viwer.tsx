"use client"; // Ensure this is at the top of the file

import React, { useEffect, useState, useRef } from "react";
import propertyfinder from "@/data/propertyfinder/homes.json";
import bayut from "@/data/bayut/homes.json";
import wasalt from "@/data/wasalt/homes.json";
import haraj from "@/data/haraj/homes.json";
 
import SearchInput from "./SearchInput"; // Import the new SearchInput component
import useSearchStore from "@/lib/store/useSearchStore"; // Import Zustand store
import Item from "./Item";
import Location from "./Location";
import { useLocationStore } from "@/lib/store/Location"; // Import LocationStore
import useBrandsStore from "@/lib/store/BrandsStore";
import useRoomsStore from "@/lib/store/RomsStore"; // Import RomsStore
import Rooms from "./Rooms";
 
// Define the type for a single property item
interface Property {
  price: string;
  title: string;
  space: string;
  url: string;
  Location: string;
  rooms: string;
  tell: string;
  whatsapp: string;
}

const Show: React.FC = () => {
  const [items, setItems] = useState<Property[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [error, setError] = useState<string | null>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const { brands } = useBrandsStore();
  const { searchTerm } = useSearchStore(); // Use Zustand to get searchTerm
  const { searchTerm: locationTerm } = useLocationStore(); // Use LocationStore to get locationTerm
  const { rooms } = useRoomsStore(); // Use RomsStore to get rooms

  useEffect(() => {
    try {
      // Assuming 'db' is meant to be one of the imported datasets
      // Replace 'db' with the actual dataset you want to use
      if (brands[0].type === "propertyfinder") {
        setItems(propertyfinder as Property[]);
      } else if (brands[0].type === "bayut") {
        setItems(bayut as Property[]);
      } else if (brands[0].type === "wasalt") {
        setItems(wasalt as Property[]);
      } else if (brands[0].type === "haraj") {
        setItems(haraj as unknown as Property[]);
      }
    } catch (e) {
      setError("Failed to load data");
    }
  }, [brands]);

  // Function to load more items
  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const searchInFunc = (item: Property) => {
    const search = searchTerm.toLowerCase();
    const titleWords = item.title ? item.title.toLowerCase().split(" ") : [];
    const locationWords = item.Location ? item.Location.toLowerCase().split(" ") : [];
    const roomsWords = item.rooms ? item.rooms.toLowerCase().split(" ") : []; 
    if (roomsWords.join(" ") !== "injosn") {
      return (
        titleWords.some((word) => word.includes(search)) ||
        locationWords.some((word) => word.includes(search)) ||
        roomsWords.some((word) => word.includes(search))
      );
    } else {
      return (
        titleWords.some((word) => word.includes(search)) ||
        locationWords.some((word) => word.includes(search))
      );
    }
  };

  const filteredItems =
    searchTerm === "" && locationTerm === "" && rooms === ""
      ? items.slice(0, visibleCount)
      : items
          .filter((item) => {
            const isSearchMatch = searchInFunc(item);
            const isLocationMatch = item.Location ? item.Location.toLowerCase().includes(
              locationTerm.toLowerCase()
            ) : false;
            const isRoomsMatch = item.rooms ? item.rooms.toLowerCase().includes(
              rooms.toLowerCase()
            ) : false;
            return (
              (searchTerm === "" || isSearchMatch) &&
              (locationTerm === "" || isLocationMatch) &&
              (rooms === "" || isRoomsMatch)
            );
          })
          .slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );
    const currentLoaderRef = loaderRef.current; // Copy the ref value to a variable
    if (currentLoaderRef) {
      observer.observe(currentLoaderRef);
    }

    return () => {
      if (currentLoaderRef) {
        observer.unobserve(currentLoaderRef);
      }
    };
  }, [visibleCount, searchTerm, locationTerm, rooms]);

  return (
    <div className="flex flex-col items-center w-full h-full px-4">
       <SearchInput />  {/* Use the SearchInput component */}
      {/* Use the Location component */}
      <div className="flex gap-5 items-center w-full px-4">
        <Location />
        <Rooms />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => <Item key={index} item={item} />)
        ) : (
          <div className="flex flex-col items-center w-full h-full px-4 justify-center">
            لايوجد نتائج
          </div>
        )}
      </div>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <div
        ref={loaderRef}
        className="h-20 w-full flex items-center justify-center mt-8"
      >
        {visibleCount < filteredItems.length ? (
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300"
            onClick={loadMore}
          >
            Load more
          </button>
        ) : (
          <div className="text-gray-600 text-center">لايوجد المزيد</div>
        )}
      </div>
      <footer className="bg-gray-200 text-gray-600 p-4 w-full flex justify-between items-center mt-8">
        <p className="text-sm"> 2024 Property Finder. All rights reserved.</p>
        <nav>
          <a href="#" className="mr-4 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Show;
