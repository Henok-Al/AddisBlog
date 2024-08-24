"use client";

import { getPost } from "@/lib/firebase/post/read";
import {
  createNewPost,
  deletePost,
  updatePost,
} from "@/lib/firebase/post/write";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

const PostFormContext = createContext();

interface PostFormProps {
  children: ReactNode;
}

export default function PostFormContextProvider({ children }: PostFormProps) {
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
      await createNewPost({ data: data, image: image });
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
      await updatePost({ data: data, image: image });
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
      await deletePost(id);
      setIsDone(true);
      router.push("/admin/posts");
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
      const res = await getPost(id);
      if (res.exists()) {
        setData(res.data());
      } else {
        throw new Error(`No Post found from id ${id}`);
      }
    } catch (error) {
      setError(error?.message);
    }
    setIsloading(false);
  };

  return (
    <PostFormContext.Provider
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
    </PostFormContext.Provider>
  );
}

export const usePostForm = () => useContext(PostFormContext);
