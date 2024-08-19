import React from "react";
import Link from "next/link";
import { CirclePlus } from "lucide-react";

const page = () => {
  return (
    <main className="p-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Categories</h1>
        <Link href={"/admin/categories/form"}>
          <button className="flex gap-2 bg-blue-500 px-4 py-2 text-white rounded-full ">
            <CirclePlus />
            Add
          </button>
        </Link>
      </div>
    </main>
  );
};

export default page;
