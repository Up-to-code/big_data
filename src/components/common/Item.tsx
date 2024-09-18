"use client"; // Ensure this is at the top of the file

import useBrandsStore from "@/lib/store/BrandsStore";
 import { MapPinHouse, Smartphone } from "lucide-react";
 
interface ItemProps {
  item: {
    title: string;
    Location: string;
    space: string;
    rooms: string;
    price: string;
    url: string;
    tell?: string;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { brands } = useBrandsStore();
  return (
    <div
      className="rounded-lg shadow-md p-4 transform transition-transform hover:scale-105 hover:shadow-lg duration-300"
      style={{ direction: "rtl" }}
    >
      <div className="text-lg font-bold mb-2 flex flex-col justify-end">
        {item.title}
      </div>
      <div className="text-md mb-2">{item.Location}</div>
      {
        item.space === item.rooms ? null : <div className="text-md mb-2">{item.space}</div>
      }
       <div className="text-md mb-2">{item.rooms} عرف</div>
      <div className="text-md mb-4">{item.price}</div>
 
        <div className="text-md mb-2 flex items-center">
          <MapPinHouse
            className="ml-1"
            style={{ fontSize: 16 }}
          />{" "}
          {item.Location}
        </div>
        {
          item.tell &&
          <div className="text-md mb-2 flex items-center">
            <Smartphone
              className="ml-1"
              style={{ fontSize: 16 }}
            />{" "}
            {item.tell}
          </div>
        }
      <button
        onClick={() => window.open(brands[0].type === "bayut" ? `https://www.bayut.sa/${item.url}` : item.url, "_blank")}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-300 w-full mt-4"
      >
        عرض العقار
      </button>
    </div>
  );
};

export default Item;
