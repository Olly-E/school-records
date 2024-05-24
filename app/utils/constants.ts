import { object, string } from 'yup'

export const TITLE = [
  {
    name: "Mr",
    id: "1",
  },
  {
    name: "Mrs",
    id: "2",
  },
  {
    name: "Miss",
    id: "3",
  },
  {
    name: "Mst.",
    id: "4",
  },
];

export const GENDER_OPTIONS = [
  {
    name: "Male",
    id: "1",
  },
  {
    name: "Female",
    id: "2",
  },
];

export const OPTION_VALIDATION = object()
  .shape({
    name: string().required("Required"),
    id: string().required("Required"),
  })
  .required("Required");

  export const FormatMoney = (value:string) => { 
    // Remove all non-digit characters 
    const rawValue = value?.replace(/[^\d]/g, ''); 
    // Add commas for thousands separator 
    const formattedValue = rawValue?.replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
    return formattedValue; 
  };