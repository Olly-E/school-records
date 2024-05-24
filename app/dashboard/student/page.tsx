"use client";
import EmptyState from "@/app/components/elements/EmptyState";
import { CardSlash } from "iconsax-react";
import React from "react";

const Page = () => {
  return (
    <div className="h-full">
      <EmptyState
        title="No Students added"
        description="Add a student to get started"
        buttonTitle="Add Student"
        icon={<CardSlash size="82" color="#000000" variant="Outline" />}
        action={() => console.log("Add Student")}
      />
    </div>
  );
};

export default Page;
