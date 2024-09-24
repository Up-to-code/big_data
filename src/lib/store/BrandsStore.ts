import { create } from "zustand";
interface Brand {
   type: "bayut" | "propertyfinder" | "wasalt" | "haraj";
}

 const useBrandsStore = create<{ brands: Brand[]; setBrands: (brands: Brand[]) => void }>((set) => ({
    brands: [{ type: "bayut" }], // Updated to match the Brand interface
    setBrands: (brands: Brand[]) => set({ brands }),
}));

export default useBrandsStore;