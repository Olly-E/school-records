import { AddTeacherFormProps } from "../types";

export const getTeacherData = (): AddTeacherFormProps[] | null => {
  try {
    const serializedData = localStorage.getItem("teacherFormData");
    if (serializedData === null) {
      return null;
    }
    return JSON.parse(serializedData) as AddTeacherFormProps[];
  } catch (error) {
    console.error("Failed to retrieve form data from local storage:", error);
    return null;
  }
};
