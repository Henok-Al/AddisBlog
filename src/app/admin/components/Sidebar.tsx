import { Gauge, LayoutList, Layers2, User } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
  const link = [
    {
      name: "Dashboard",
      link: "/admin",
      icon: <Gauge />,
    },
    {
      name: "Posts",
      link: "/admin/posts",
      icon: <LayoutList />,
    },
    {
      name: "Categories",
      link: "/admin/categories",
      icon: <Layers2 />,
    },
    {
      name: "Authors",
      link: "/admin/authors",
      icon: <User />,
    },
  ];
  return (
    <section className="w-[200px] border-r h-screen p-6">
      <ul className="w-full flex flex-col gap-6">
        {link.map((item, index) => {
          return (
            <Link href={item.link} key={index}>
              <li className="flex gap-3 font-bold items-center bg-blue-50 rounded-full px-4 py-0">
                {item.icon}
                <span className="font-bold">{item.name}</span>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default Sidebar;
