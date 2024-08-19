"use client";

import { createNewCategory } from "@/lib/firebase/category/write";
import { createContext, ReactNode, useContext, useState } from "react";

const CategoryFormContext = createContext();

// interface CategoryFormProps {
//   children: ReactNode;
// }

export default function CategoryFormContextProvider({ children }) {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [isDone, setIsDone] = useState(false);
  const [image, setImage] = useState(null);

  const handleData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleCreate = async () => {
    setError(null);
    setIsloading(true);
    setIsDone(false);

    try {
      //TODO: Add data to firebase firestore

      //TODO: image store in firebase storage
      await createNewCategory({ data: data, image: image });
      setIsDone(true);
    } catch (error) {
      setError(error?.message);
    }
    setIsloading(false);
  };

  return (
    <CategoryFormContext.Provider
      value={{
        data,
        isLoading,
        error,
        isDone,
        image,
        setImage,
        handleCreate,
        handleData,
      }}
    >
      {children}
    </CategoryFormContext.Provider>
  );
}

export const useCategoryForm = () => useContext(CategoryFormContext);
