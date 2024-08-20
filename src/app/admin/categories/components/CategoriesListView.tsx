"use client";

import { useCategories } from "@/lib/firebase/category/read";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesListView() {
  const { data, error, isLoading } = useCategories();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  if (!data) {
    return <h1>Data not found!</h1>;
  }
  return (
    <section>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-blue-50">Sr.</th>
            <th className="border px-4 py-2 bg-blue-50">Icon</th>
            <th className="border px-4 py-2 bg-blue-50">Name</th>
            <th className="border px-4 py-2 bg-blue-50">Slug</th>
            <th className="border px-4 py-2 bg-blue-50">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, key) => {
            return (
              <tr>
                <td className="border px-4 py-2">{key + 1}</td>
                <td className="border px-4 py-2">
                  <Image
                    src={item?.iconURL}
                    width={50}
                    height={10}
                    alt="Picture of the author"
                  />
                </td>
                <td className="border px-4 py-2">{item?.name}</td>
                <td className="border px-4 py-2">{item?.slug}</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm">
                    Action
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
