"use client";
import { createContext, ReactNode, useContext, useState } from "react";

const CategoryFormContext = createContext();

interface CategoryFormProps {
  children: ReactNode;
}

export default function CategoryFormContextProvider({
  children,
}: CategoryFormProps) {
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [isDone, setIsDone] = useState(false);

  const handleData = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleCreate = async () => {
    setError(null);
    setIsloading(true);

    try {
      //TODO: Add data to firebase firestore
      //TODO: image store in firebase storage
      setIsDone(false);
    } catch (error) {
      setError(error?.message);
    }
    setIsloading(false);
  };

  return (
    <CategoryFormContext.Provider
      value={{ data, isLoading, error, isDone, handleCreate, handleData }}
    >
      {children}
    </CategoryFormContext.Provider>
  );
}

export const useCategoryForm = () => useContext(CategoryFormContext);
