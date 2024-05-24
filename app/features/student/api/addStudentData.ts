import { AddStudentFormProps } from "../types";

export const AddStudentData = (formData: AddStudentFormProps) => {
  try {
    // Retrieve the existing data from local storage
    const existingData = localStorage.getItem("studentFormData");
    const students = existingData ? JSON.parse(existingData) : [];

    // Add new teacher data
    students.push(formData);

    // Serialize the updated array back to a string and store it
    const serializedData = JSON.stringify(students);
    localStorage.setItem("studentFormData", serializedData);
  } catch (error) {
    console.error("Failed to save form data to local storage:", error);
  }
};
