"use client";

import { getAuthor } from "@/lib/firebase/author/read";
import {
  createNewAuthor,
  deleteAuthor,
  updateAuthor,
} from "@/lib/firebase/author/write";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

const AuthorFormContext = createContext();

interface AuthorFormProps {
  children: ReactNode;
}

export default function AuthorFormContextProvider({
  children,
}: AuthorFormProps) {
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
      await createNewAuthor({ data: data, image: image });
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
      await updateAuthor({ data: data, image: image });
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
      await deleteAuthor(id);
      setIsDone(true);
      router.push("/admin/authors");
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
      const res = await getAuthor(id);
      if (res.exists()) {
        setData(res.data());
      } else {
        throw new Error(`No Author found from id ${id}`);
      }
    } catch (error) {
      setError(error?.message);
    }
    setIsloading(false);
  };

  return (
    <AuthorFormContext.Provider
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
    </AuthorFormContext.Provider>
  );
}

export const useAuthorForm = () => useContext(AuthorFormContext);
