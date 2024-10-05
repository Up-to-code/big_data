export interface Property  {
  id?: string;
  name: string;
  description?: string;
  price: number;
  location: string;
  image?: string;
  bedrooms?: number;
  bathrooms?: number;
  garages?: number;
  contactName: string;
  contactPhone: string;
  type: string;
  area: string;
  createdAt: Date;
 
}

import { firestore } from "./init";
import { collection, addDoc } from "firebase/firestore";
export const createProperty = async (data: Property) => {
  try {
    console.log("Data being sent to Firestore:", data); // Added logging
    const docRef = collection(firestore, "properties");
    const docSnap = await addDoc(docRef, data);
    console.log("Document ID:", docSnap.id);
    return docSnap.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw new Error("Failed to create property. Please try again.");
  }
};
