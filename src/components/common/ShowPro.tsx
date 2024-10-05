"use client";
import React, { useEffect, useState } from "react";
import MyPro from "./MyPro";
import { Property } from "@/firebase/create";
import { firestore } from "@/firebase/init";
import { query, collection, getDocs } from "firebase/firestore";
import { Loader } from "lucide-react";

function ShowPro() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true); // Set loading to true when fetching starts
      const snapshot = query(collection(firestore, "properties"));
      const docs = await getDocs(snapshot);
      const properties = docs.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Property),
      }));
      setProperties(properties);
      setLoading(false); // Set loading to false when fetching is done
    };
    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <div className="flex justify-center items-center h-[80vh]">
          <div className="animate-spin text-2xl">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {properties.map((property: Property) => (
            <MyPro key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowPro;
