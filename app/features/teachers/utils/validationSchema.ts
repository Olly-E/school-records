import { OPTION_VALIDATION } from "@/app/utils/constants";
import { isValidPhoneNumber } from "react-phone-number-input";
import { object, string, date } from "yup";

export const addTeacherValidationSchema = object().shape({
  firstName: string().required("First Name is required"),
  lastName: string().required("Last Name is required"),
  nin: string().required("NIN is required"),
  phone: string()
    .test("validation-phone", "Invalid phone number", (value = "") => {
      return isValidPhoneNumber(value);
    })
    .required("Phone number is required)"),
  gender: OPTION_VALIDATION,
  title: OPTION_VALIDATION,
  dob: date().required("Date of Birth is required"),
});
