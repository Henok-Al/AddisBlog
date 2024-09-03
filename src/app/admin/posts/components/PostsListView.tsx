"use client";

import { usePosts } from "@/lib/firebase/post/read";
import Image from "next/image";
import Link from "next/link";

export default function PostsListView() {
  //define states
  const { data, error, isLoading } = usePosts();
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
            <th className="border px-4 py-2 bg-blue-50">Image</th>
            <th className="border px-4 py-2 bg-blue-50">Title</th>
            <th className="border px-4 py-2 bg-blue-50">Price</th>
            <th className="border px-4 py-2 bg-blue-50">Slug</th>
            <th className="border px-4 py-2 bg-blue-50">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, key) => {
            return (
              <tr key={item.id}>
                <td className="border px-4 py-2">{key + 1}</td>
                <td className="border px-4 py-2">
                  <img className="h-10" src={item?.imageURL} alt="" />{" "}
                </td>
                <td className="border px-4 py-2">{item?.title}</td>
                <td className="border px-4 py-2">{item?.price}</td>
                <td className="border px-4 py-2">{item?.slug}</td>
                <td className="border px-4 py-2">
                  {/* get post id */}
                  <Link href={`/admin/posts/form?id=${item?.id}`}>
                    <button className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm">
                      Action
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
