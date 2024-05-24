import { AddTeacherFormProps } from "../types";

export const addTeacherData = (formData: AddTeacherFormProps) => {
  try {
    // Retrieve the existing data from local storage
    const existingData = localStorage.getItem("teacherFormData");
    const teachers = existingData ? JSON.parse(existingData) : [];

    // Add new teacher data
    teachers.push(formData);

    // Serialize the updated array back to a string and store it
    const serializedData = JSON.stringify(teachers);
    localStorage.setItem("teacherFormData", serializedData);
  } catch (error) {
    console.error("Failed to save form data to local storage:", error);
  }
};
