import {create} from "zustand";

// إنشاء المتجر لتخزين البحث والحالة
interface LocationStore {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const useLocationStore = create<LocationStore>((set ) => ({
  searchTerm: "",
  setSearchTerm: (term: string) => set({ searchTerm: term }),
}));

    ;
