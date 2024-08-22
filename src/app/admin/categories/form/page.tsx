"use client";

import Image from "next/image";
import { useCategoryForm } from "./contexts/CategoryFormContext";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  // Get id from search params
  const searchParams = useSearchParams();
  const updateCategoryId = searchParams.get("id");

  const {
    data,
    isLoading,
    error,
    isDone,
    handleCreate,
    handleUpdate,
    handleDelete,
    handleData,
    image,
    setImage,
    fetchData,
  } = useCategoryForm();
  console.log(isLoading);

  useEffect(() => {
    if (updateCategoryId) {
      fetchData(updateCategoryId);
    }
  }, [updateCategoryId]);

  return (
    <main className="w-full p-6 flex flex-col gap-3">
      <div className="flex gap-5 items-center">
        {updateCategoryId && (
          <div className="flex">
            <h3 className="text-white bg-orange-500 px-4 py-2 rounded-full text-xs font-bold">
              Update
            </h3>
          </div>
        )}
        {!updateCategoryId && (
          <div className="flex">
            <h3 className="text-white bg-green-500 px-4 py-2 rounded-full text-xs font-bold">
              Create
            </h3>
          </div>
        )}
        <h1 className="font-bold">Category | Form</h1>
      </div>
      <section className="flex">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (updateCategoryId) {
              handleUpdate();
            } else {
              handleCreate();
            }
          }}
          className="flex flex-col gap-2 bg-blue-50 rounded-xl p-7"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Category Name <span className="text-red-500 text-sm">*</span>
            </label>
            <input
              className="px-4 py-2 rounded-md border bg-gray-50"
              placeholder="Enter Category Name"
              type="text"
              onChange={(e) => {
                handleData("name", e.target.value);
              }}
              value={data?.name || ""}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Category Slug <span className="text-red-500 text-sm">*</span>
            </label>
            <input
              className="px-4 py-2 rounded-md border bg-gray-50"
              placeholder="Enter Category Slug"
              type="text"
              onChange={(e) => {
                handleData("slug", e.target.value);
              }}
              value={data?.slug || ""}
              required
            />
          </div>
          {data?.iconURL && (
            <div>
              <Image width={300} height={100} src={data?.iconURL} alt="image" />
            </div>
          )}
          {image && (
            <div>
              <Image
                width={300}
                height={100}
                src={URL.createObjectURL(image)}
                alt="image"
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">Image</label>
            <input
              className="px-4 py-2 rounded-md border bg-gray-50"
              placeholder="Upload Image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setImage(e.target.files[0]);
                }
              }}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {!isDone && (
            <button
              type="submit"
              disabled={isLoading || isDone}
              className="bg-blue-500 rounded-full px-4 py-2 text-white"
            >
              {isLoading
                ? "Loading..."
                : updateCategoryId
                ? "Update"
                : "Create"}
            </button>
          )}

          {updateCategoryId && !isDone && (
            <button
              onClick={(e) => {
                e.preventDefault();
                handleDelete(updateCategoryId);
              }}
              type="submit"
              disabled={isLoading || isDone}
              className="bg-red-500 rounded-full px-4 py-2 text-white"
            >
              {isLoading ? "Loading..." : "delete"}
            </button>
          )}

          {isDone && (
            <h3 className="text-green-500 font-bold text-center">
              Successfully {updateCategoryId ? "Updated" : "Created"}!
            </h3>
          )}
        </form>
      </section>
    </main>
  );
};

export default Page;
