"use client";
import Image from "next/image";
import React from "react";
import propty from "@/assets/logo-en.svg";
import Bayut from "@/assets/Bayut-KSA.png";
import wasalt from "@/assets/wasalt-logo-ar.svg";
import useBrandsStore from "@/lib/store/BrandsStore";

function Brands() {
  const { brands, setBrands } = useBrandsStore();

  return (
    <div className="flex gap-4 w-full overflow-x-auto scroll-smooth scroll-snap-x px-2 py-4">
      <div
        className={`min-w-[150px] bg-slate-100 dark:bg-slate-800 flex flex-col justify-center items-center px-6 py-2 rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-105 border-4 border-double ${brands[0]?.type === "propertyfinder" ? "border-blue-500" : "border-gray-300"}`}
        onClick={() => setBrands([{ type: "propertyfinder" }])}
      >
        <Image src={propty} alt="Property Finder" width={100} height={50} />
      </div>
      <div
        className={`min-w-[150px] bg-slate-100 dark:bg-slate-800 flex flex-col justify-center items-center px-6 py-2 rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-105 border-4 border-double ${brands[0]?.type === "bayut" ? "border-blue-500" : "border-gray-300"}`}
        onClick={() => setBrands([{ type: "bayut" }])}
      >
        <Image src={Bayut} alt="Bayut" width={100} height={50} />
      </div>
      <div
        className={`min-w-[150px] bg-slate-100 dark:bg-slate-800 flex flex-col justify-center items-center px-6 py-2 rounded-md shadow-md transition-transform duration-300 ease-in-out hover:scale-105 border-4 border-double ${brands[0]?.type === "wasalt" ? "border-blue-500" : "border-gray-300"}`}
        onClick={() => setBrands([{ type: "wasalt" }])}
      >
        <Image src={wasalt} alt="Wasalt" width={100} height={50} />
      </div>
    </div>
  );
}

export default Brands;
