"use client";
import useRoomsStore from "@/lib/store/RomsStore";
import { Input } from "../ui/input";
function Rooms() {
  const { rooms, setRooms } = useRoomsStore();

  return (
  
      <Input         className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-300 text-gray-700 dark:text-gray-100 h-12"
      type="number" value={rooms} onChange={(e) => setRooms(e.target.value)} placeholder="اكتب عدد الغرف"  />
   
  )
}

export default Rooms