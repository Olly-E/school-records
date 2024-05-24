"use client";
import React from "react";
import { getTeacherData } from "../features/teachers/api/getTeacherData";
import { getStudentData } from "../features/student/api/getStudentData";
import { AddTeacherFormProps } from "../features/teachers/types";
import { AddStudentFormProps } from "../features/student/types";
import { Loader } from "../components/elements/Loader";
import Header from "../features/layouts/Header";

const Page = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [studentData, setStudentData] = React.useState<
    AddStudentFormProps[] | null
  >(null);
  const [teachersData, setTeachersData] = React.useState<
    AddTeacherFormProps[] | null
  >(null);

  React.useEffect(() => {
    const data = getStudentData();
    const teachersData = getTeacherData();
    if (data) {
      setStudentData(data);
    }
    if (teachersData) {
      setTeachersData(teachersData);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className="w-full h-full">
      <Header title="Overview"  />
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader variant="dark" size="xl" />
        </div>
      ) : (
        <div className="w-full h-full flex items-center px-6 justify-center">
          <div className="h-[300px] flex items-center gap-10">
            <div className="w-[200px] aspect-square min-w-[200px] bg-primary rounded-full flex flex-col items-center justify-center">
              <p className="font-bold text-[46px]">{teachersData?.length}</p>
              {teachersData && teachersData.length === 1
                ? "Teacher"
                : "Teachers"}
            </div>
            <div className="w-[200px] aspect-square min-w-[200px] bg-primary rounded-full flex flex-col items-center justify-center">
              <p className="font-bold text-[46px]">{studentData?.length}</p>
              Total Student
            </div>
            <div className="w-[200px] aspect-square min-w-[200px] bg-primary rounded-full flex flex-col items-center justify-center">
              <p className="font-bold text-[46px]">
                {studentData?.length ?? 0 + (teachersData?.length ?? 0)}
              </p>
              Total Registered
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
