"use client";

import { getCategory } from "@/lib/firebase/category/read";
import {
  createNewCategory,
  deleteCategory,
  updateCategory,
} from "@/lib/firebase/category/write";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";
import { FaBedPulse } from "react-icons/fa6";

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
  const [image, setImage] = useState(null);

  const router = useRouter();

  const handleData = (key, value) => {
    setIsDone(false);
    setData({
      ...data,
      [key]: value,
    });
  };

  //create
  const handleCreate = async () => {
    setError(null);
    setIsloading(true);
    setIsDone(false);

    try {
      await createNewCategory({ data: data, image: image });
      setIsDone(true);
    } catch (error) {
      setError(error?.message);
    }
    setIsloading(false);
  };

  //update
  const handleUpdate = async () => {
    setError(null);
    setIsloading(true);
    setIsDone(false);

    try {
      await updateCategory({ data: data, image: image });
      setIsDone(true);
    } catch (error) {
      setError(error?.message);
    }
    setIsloading(false);
  };

  //delete
  const handleDelete = async (id) => {
    setError(null);
    setIsloading(true);
    setIsDone(false);

    try {
      await deleteCategory(id);
      setIsDone(true);
      router.push("/admin/categories");
    } catch (error) {
      setError(error?.message);
    }
    setIsloading(false);
  };

  const fetchData = async (id) => {
    setError(null);
    setIsloading(true);
    setIsDone(false);
    try {
      const res = await getCategory(id);
      if (res.exists()) {
        setData(res.data());
      } else {
        throw new Error(`No Category found from id ${id}`);
      }
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
        handleUpdate,
        handleDelete,
        handleData,
        fetchData,
      }}
    >
      {children}
    </CategoryFormContext.Provider>
  );
}

export const useCategoryForm = () => useContext(CategoryFormContext);
