import clsx from "clsx";
import { Category2, Ontology, Profile, Teacher } from "iconsax-react";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const LINKS = [
    {
      name: "Overview",
      icon: <Category2 size="26" color="#000000" variant="Bold" />,
      link: "/dashboard",
    },
    {
      name: "Teacher",
      icon: <Teacher size="26" color="#000000" variant="Bold" />,
      link: "/dashboard/teacher",
    },
    {
      name: "Student",
      icon: <Profile size="26" color="#000000" variant="Bold" />,
      link: "/dashboard/student",
    },
  ];
  return (
    <div className="bg-primary text-black h-screen min-w-[250px] w-[250px] pt-6 pb-10 px-6">
      <div className="flex justify-center mb-3">
        <Ontology size="42" color="#000000" variant="Bold" />
      </div>
      <h1 className="text-2xl text-center font-bold">Dashboard</h1>
      <div className="flex flex-col items-center justify-center mt-10">
        {LINKS.map((link, index) => (
          <Link
            href={link.link}
            key={index}
            className={clsx(
              "flex items-center w-full gap-3",
              index > 0 && "mt-8"
            )}
          >
            {link.icon}
            <p>{link.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
