import { Option } from "@/app/types";

export interface AddTeacherFormProps {
  firstName: string;
  lastName: string;
  nin: string;
  phone: string;
  gender: Option;
  salary?: string;
  title: Option;
  dob: Date;
  id?: string;
}

