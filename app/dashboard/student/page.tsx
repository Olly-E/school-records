"use client";
import { CardSlash } from "iconsax-react";
import React from "react";

import { getStudentData } from "@/app/features/student/api/getStudentData";
import { useComponentVisible } from "@/app/hooks/useComponentVisible";
import AddStudentModal from "@/app/components/modals/AddStudentModal";
import { AddStudentFormProps } from "@/app/features/student/types";
import EmptyState from "@/app/components/elements/EmptyState";
import { Avatar } from "@/app/components/elements/Avatar";
import { Loader } from "@/app/components/elements/Loader";
import Header from "@/app/features/layouts/Header";

const Student = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [studentData, setStudentData] = React.useState<
    AddStudentFormProps[] | null
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
    const data = getStudentData();
    if (data) {
      setStudentData(data);
    }
    setIsLoading(false);
  }, [isComponentVisible === false]);
  return isLoading ? (
    <div className="w-full h-full flex items-center justify-center">
      <Loader variant="dark" size="xl" />
    </div>
  ) : (
    <>
      {!studentData ? (
        <EmptyState
          title="No Students added"
          description="Add a student to get started"
          buttonTitle="Add Student"
          icon={<CardSlash size="82" color="#000000" variant="Outline" />}
          action={() => handleClickOnDropDownButton()}
        />
      ) : (
        <div className="">
          <Header
            title="Student"
            actionTitle="Add Student"
            action={handleClickOnDropDownButton}
          />
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-between w-full gap-6 p-6">
            {studentData &&
              studentData?.map((data, index) => {
                return (
                  <div
                    className="bg-white rounded-lg rounded-br-3xl shadow-md border-r border-b border-r-primary border-b-primary py-10 px-8"
                    key={index}
                  >
                    <Avatar className="bg-primary rounded-full text-black w-[100px] text-[30px] font-bold mx-auto mb-6 h-[100px] min-w-[100px] aspect-square">
                      {data.firstName[0]}
                    </Avatar>
                    <h3 className="text-[18px] font-bold capitalize text-center">
                      {data.firstName} {data.lastName}
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

      <AddStudentModal
        setModalOpen={setIsComponentVisible}
        modalOpen={isComponentVisible}
        modalRef={ref}
      />
    </>
  );
};

export default Student;
