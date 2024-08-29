"use client";

import { useAuthors } from "@/lib/firebase/author/read";
import Image from "next/image";
import Link from "next/link";
// import { useAuthors } from "../../../../lib/firebase/author/read";

interface Author {
  id: string;
  photoURL: string;
  name: string;
  email: string;
}

export default function AuthorsListView() {
  const { data, error, isLoading } = useAuthors();
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
            <th className="border px-4 py-2 bg-blue-50">Photo</th>
            <th className="border px-4 py-2 bg-blue-50">Name</th>
            <th className="border px-4 py-2 bg-blue-50">Email</th>
            <th className="border px-4 py-2 bg-blue-50">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: Author, key: number) => {
            return (
              <tr key={item.id}>
                <td className="border px-4 py-2">{key + 1}</td>
                <td className="border px-4 py-2">
                  <Image
                    src={item?.photoURL}
                    width={50}
                    height={40}
                    alt="Picture of the author"
                  />
                </td>
                <td className="border px-4 py-2">{item?.name}</td>
                <td className="border px-4 py-2">{item?.email}</td>
                <td className="border px-4 py-2">
                  {/* get author id */}
                  <Link href={`/admin/authors/form?id=${item?.id}`}>
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
