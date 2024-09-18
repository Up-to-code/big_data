"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import propty from "@/assets/logo-en.svg";
import Bayut from "@/assets/Bayut-KSA.png";
import wasalt from "@/assets/wasalt-logo-ar.svg";
import useBrandsStore from "@/lib/store/BrandsStore";
import { motion } from "framer-motion";

function Brands() {
  const { brands, setBrands } = useBrandsStore();

  useEffect(() => {
    console.log(brands);
  }, [brands]);

  // Function to get class names
  const getClassNames = (type: string) => {
    const baseClasses = "min-w-[150px] bg-slate-100 dark:bg-slate-800 flex flex-col justify-center items-center px-6 py-2 rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-105 border-4 border-double";
    const activeClasses = "border-blue-500";
    return `${baseClasses} ${brands[0]?.type === type ? activeClasses : "border-gray-300"}`;
  };

  return (
    <div className="flex gap-4 w-full overflow-x-auto scroll-smooth scroll-snap-x px-2 py-4">
      <motion.div
        className={getClassNames("propertyfinder")}
        onClick={() => setBrands([{ type: "propertyfinder" }])}
        whileHover={{ scale: 1.05 }}
      >
        <Image src={propty} alt="Property Finder" width={100} height={50} />
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 border-b-2 border-gray-400">
          Property Finder
        </p>
      </motion.div>
      <motion.div
        className={getClassNames("bayut")}
        onClick={() => setBrands([{ type: "bayut" }])}
        whileHover={{ scale: 1.05 }}
      >
        <Image src={Bayut} alt="Bayut" width={100} height={50} />
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 border-b-2 border-gray-400">
          Bayut
        </p>
      </motion.div>
      <motion.div
        className={getClassNames("wasalt")}
        onClick={() => setBrands([{ type: "wasalt" }])}
        whileHover={{ scale: 1.05 }}
      >
        <Image src={wasalt} alt="Wasalt" width={100} height={50} />
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 border-b-2 border-gray-400">
          Wasalt
        </p>
      </motion.div>
    </div>
  );
}

export default Brands;
