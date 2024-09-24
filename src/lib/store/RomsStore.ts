import { create } from "zustand";

interface RoomsState {
  rooms: string;
  setRooms: (rooms: string) => void;
}

const useRoomsStore = create<RoomsState>((set) => ({
  rooms: "",
  setRooms: (rooms) => set({ rooms }),
}));

export default useRoomsStore;

