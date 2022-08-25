import React, { useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Fields from "./Fields";
import { Modal } from "opcmodal";

/**
 * @description Component that show the create employee form
 * @returns { HTMLElement }
 */
const CreateEmployee = () => {
  const [isOpen, setIsOpen] = useState(false);

  /**
   * @description Function to open the modal
   */

  const openModal = () => {
    setIsOpen(true);
  };
  /**
   * @description Function to close the modal
   */
  const closeModal = () => {
    setIsOpen(false);
  };

  /**
   * @description Validation of forms
   */
  const yupSchema = yup.object({
    firstName: yup.string().required(`The Firstname field is mandatory`),

    lastName: yup.string().required("The LastName field is mandatory"),

    dateOfBirth: yup
      .date()
      .required()
      .typeError("please enter a valid date")
      .required(),

    startDate: yup
      .date()
      .required()
      .typeError("please enter a valid date")
      .required(),

    street: yup.string().typeError("Please enter a street").required(),
    city: yup.string().typeError("Please enter a city").required(),
    state: yup.string().typeError("Please enter a state").required(),
    zipCode: yup.number().typeError("Please enter a number").required(),
    department: yup.string().typeError("Please enter a department").required(),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  };

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(yupSchema),
    mode: "onSubmit",
  });

  let data = JSON.parse(localStorage.getItem("dataEmployee")) || [];

  /**
   * @description Function that save the created employee
   */
  const submit = (values) => {
    data.push(values);
    localStorage.setItem("dataEmployee", JSON.stringify(data));
    openModal();
    reset(defaultValues);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)} className="mb-20">
        <Fields
          register={register}
          errors={errors}
          control={control}
          states={states}
          departments={departments}
          defaultValues={defaultValues}
        />

        <div className="d-flex justify-content-end">
          <button className="btn btn-primary">save</button>
        </div>
      </form>

      {isOpen && <Modal closeModal={closeModal} />}
    </>
  );
};

export default CreateEmployee;

const states = [
  {
    option: "Alabama",
    abbreviation: "AL",
  },
  {
    option: "Alaska",
    abbreviation: "AK",
  },
  {
    option: "American Samoa",
    abbreviation: "AS",
  },
  {
    option: "Arizona",
    abbreviation: "AZ",
  },
  {
    option: "Arkansas",
    abbreviation: "AR",
  },
  {
    option: "California",
    abbreviation: "CA",
  },
  {
    option: "Colorado",
    abbreviation: "CO",
  },
  {
    option: "Connecticut",
    abbreviation: "CT",
  },
  {
    option: "Delaware",
    abbreviation: "DE",
  },
  {
    option: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    option: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    option: "Florida",
    abbreviation: "FL",
  },
  {
    option: "Georgia",
    abbreviation: "GA",
  },
  {
    option: "Guam",
    abbreviation: "GU",
  },
  {
    option: "Hawaii",
    abbreviation: "HI",
  },
  {
    option: "Idaho",
    abbreviation: "ID",
  },
  {
    option: "Illinois",
    abbreviation: "IL",
  },
  {
    option: "Indiana",
    abbreviation: "IN",
  },
  {
    option: "Iowa",
    abbreviation: "IA",
  },
  {
    option: "Kansas",
    abbreviation: "KS",
  },
  {
    option: "Kentucky",
    abbreviation: "KY",
  },
  {
    option: "Louisiana",
    abbreviation: "LA",
  },
  {
    option: "Maine",
    abbreviation: "ME",
  },
  {
    option: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    option: "Maryland",
    abbreviation: "MD",
  },
  {
    option: "Massachusetts",
    abbreviation: "MA",
  },
  {
    option: "Michigan",
    abbreviation: "MI",
  },
  {
    option: "Minnesota",
    abbreviation: "MN",
  },
  {
    option: "Mississippi",
    abbreviation: "MS",
  },
  {
    option: "Missouri",
    abbreviation: "MO",
  },
  {
    option: "Montana",
    abbreviation: "MT",
  },
  {
    option: "Nebraska",
    abbreviation: "NE",
  },
  {
    option: "Nevada",
    abbreviation: "NV",
  },
  {
    option: "New Hampshire",
    abbreviation: "NH",
  },
  {
    option: "New Jersey",
    abbreviation: "NJ",
  },
  {
    option: "New Mexico",
    abbreviation: "NM",
  },
  {
    option: "New York",
    abbreviation: "NY",
  },
  {
    option: "North Carolina",
    abbreviation: "NC",
  },
  {
    option: "North Dakota",
    abbreviation: "ND",
  },
  {
    option: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    option: "Ohio",
    abbreviation: "OH",
  },
  {
    option: "Oklahoma",
    abbreviation: "OK",
  },
  {
    option: "Oregon",
    abbreviation: "OR",
  },
  {
    option: "Palau",
    abbreviation: "PW",
  },
  {
    option: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    option: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    option: "Rhode Island",
    abbreviation: "RI",
  },
  {
    option: "South Carolina",
    abbreviation: "SC",
  },
  {
    option: "South Dakota",
    abbreviation: "SD",
  },
  {
    option: "Tennessee",
    abbreviation: "TN",
  },
  {
    option: "Texas",
    abbreviation: "TX",
  },
  {
    option: "Utah",
    abbreviation: "UT",
  },
  {
    option: "Vermont",
    abbreviation: "VT",
  },
  {
    option: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    option: "Virginia",
    abbreviation: "VA",
  },
  {
    option: "Washington",
    abbreviation: "WA",
  },
  {
    option: "West Virginia",
    abbreviation: "WV",
  },
  {
    option: "Wisconsin",
    abbreviation: "WI",
  },
  {
    option: "Wyoming",
    abbreviation: "WY",
  },
];

export const departments = [
  {
    option: "Sales",
  },
  {
    option: "Marketing",
  },
  {
    option: "Engineering",
  },
  {
    option: "Human Resources",
  },
  {
    option: "Legal",
  },
];
