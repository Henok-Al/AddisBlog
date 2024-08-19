"use client";

const page = () => {
  return (
    <main className="w-full p-6 flex  flex-col gap-3">
      <h1 className="font-bold">Category | Form</h1>
      <section className="flex">
        <form
          onSubmit={(e) => {
            e.preventDefault();
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
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-500">
              Image <span className="text-red-500 text-sm">*</span>
            </label>
            <input
              className="px-4 py-2 rounded-md border bg-gray-50"
              placeholder="Upload Image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                e.preventDefault();
              }}
              required
            />
          </div>
          <button className="bg-blue-500 rounded-full px-4 py-2  text-white"></button>
        </form>
      </section>
    </main>
  );
};

export default page;
