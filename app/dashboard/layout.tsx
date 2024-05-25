import type { Metadata } from "next";

import Sidebar from "../features/layouts/Sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for School Records Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#FAFAFA] text-[#011822] min-h-screen flex ">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-[calc(100vw-250px)] h-screen bg-gray-100">
        {children}
      </div>
    </div>
  );
}
