"use client";
import { Personalcard } from "iconsax-react";
import React from "react";

import { getTeacherData } from "@/app/features/teachers/api/getTeacherData";
import AddTeacherModal from "@/app/components/modals/AddTeacherModal";
import { useComponentVisible } from "@/app/hooks/useComponentVisible";
import { AddTeacherFormProps } from "@/app/features/teachers/types";
import EmptyState from "@/app/components/elements/EmptyState";
import { Avatar } from "@/app/components/elements/Avatar";
import Header from "@/app/features/layouts/Header";

const Page = () => {
  const [teachersData, setTeachersData] = React.useState<
    AddTeacherFormProps[] | null
  >(null);

  const calcAge = (dob: string) => {
    const date = new Date(dob);
    const diff_ms = Date.now() - date.getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  const {
    handleClickOnDropDownButton,
    isComponentVisible,
    setIsComponentVisible,
    ref,
  } = useComponentVisible();

  React.useEffect(() => {
    const data = getTeacherData();
    if (data) {
      setTeachersData(data);
    }
  }, [isComponentVisible === false]);

  return (
    <>
      {!teachersData ? (
        <EmptyState
          title="No Teachers added"
          description="Add a Teacher to get started"
          buttonTitle="Add teacher"
          icon={<Personalcard size="82" color="#000000" variant="Outline" />}
          action={handleClickOnDropDownButton}
        />
      ) : (
        <div className="">
          <Header
            title="Teachers"
            actionTitle="Add Teacher"
            action={handleClickOnDropDownButton}
          />
          <div className="grid grid-cols-5 justify-between w-full gap-6 p-6">
            {teachersData &&
              teachersData?.map((data, index) => {
                return (
                  <div
                    className="bg-white rounded-lg rounded-br-3xl shadow-md border-r border-b border-r-primary border-b-primary py-10 px-8"
                    key={index}
                  >
                    <Avatar className="bg-primary rounded-full text-black w-[100px] text-[30px] font-bold mx-auto mb-6 h-[100px] min-w-[100px] aspect-square">
                      {data.firstName[0]}
                    </Avatar>
                    <h3 className="text-[18px] font-bold capitalize text-center">
                      {data.title.name} {data.firstName} {data.lastName}
                    </h3>
                    <p className="text-sm text-center mt-2">{data.nin}</p>
                    <p className="text-center text-xs mt-4 text-gray-400">
                      {calcAge(data.dob as unknown as string)} years
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      <AddTeacherModal
        setModalOpen={setIsComponentVisible}
        modalOpen={isComponentVisible}
        modalRef={ref}
      />
    </>
  );
};

export default Page;
