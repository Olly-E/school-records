import { AddStudentFormProps } from "../types";

export const getStudentData = (): AddStudentFormProps[] | null => {
  try {
    const serializedData = localStorage.getItem("studentFormData");
    if (serializedData === null) {
      return null;
    }
    return JSON.parse(serializedData) as AddStudentFormProps[];
  } catch (error) {
    console.error("Failed to retrieve form data from local storage:", error);
    return null;
  }
};
