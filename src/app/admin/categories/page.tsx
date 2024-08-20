import Link from "next/link";
import { CirclePlus } from "lucide-react";
import CategoriesListView from "./components/CategoriesListView";

const page = () => {
  return (
    <main className="p-6 w-full flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Categories</h1>
        <Link href={"/admin/categories/form"}>
          <button className="flex gap-2 bg-blue-500 px-4 py-2 text-white rounded-full ">
            <CirclePlus />
            Add
          </button>
        </Link>
      </div>
      <CategoriesListView />
    </main>
  );
};

export default page;
