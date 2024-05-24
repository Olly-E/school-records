import { isValidPhoneNumber } from "react-phone-number-input";
import { object, string, date } from "yup";

export const addStudentValidationSchema = object().shape({
  firstName: string().required("First Name is required"),
  lastName: string().required("Last Name is required"),
  nin: string().required("NIN is required"),
  phone: string()
    .test("validation-phone", "Invalid phone number", (value = "") => {
      return isValidPhoneNumber(value);
    })
    .required("Phone number is required)"),
  dob: date()
    .max(new Date(), "Date of birth cannot be in the future.")
    .test("age-check", "You must not be more than 22 years old.", (value) => {
      if (!value) return false; // Safeguard against undefined values
      const today = new Date();
      const birthDate = new Date(value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age <= 22;
    })
    .required("Date of birth is required."),
});
