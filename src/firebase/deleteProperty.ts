import { firestore } from "./init";
import { doc, deleteDoc } from "firebase/firestore";

export const deleteProperty = async (id: string) => {
  try {
    const docRef = doc(firestore, "properties", id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};
