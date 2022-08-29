import React, { useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Fields from "./Fields";
import { Modal } from "opcmodal";
import { useDispatch } from "react-redux";
import { add } from "../../features/Employee/Employee.slice";
import { departments, states } from "../../_mocks_/data";

/**
 * @description Component that show the create employee form
 * @returns { HTMLElement }
 */
const CreateEmployee = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

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
    first_name: yup.string().required(`The Firstname field is mandatory`),

    last_name: yup.string().required("The LastName field is mandatory"),

    date_Of_Birth: yup
      .date()
      .required()
      .typeError("please enter a valid date")
      .required(),

    start_date: yup
      .date()
      .required()
      .typeError("please enter a valid date")
      .required(),

    street: yup.string().typeError("Please enter a street").required(),
    city: yup.string().typeError("Please enter a city").required(),
    state: yup.string().typeError("Please enter a state").required(),
    zip_code: yup.number().typeError("Please enter a number").required(),
    department: yup.string().typeError("Please enter a department").required(),
  });

  const defaultValues = {
    first_name: "",
    last_name: "",
    date_Of_Birth: "",
    start_date: "",
    street: "",
    city: "",
    state: "",
    zip_code: "",
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

  /**
   * @description Function that save the created employee
   */
  const submit = (values) => {
    // format date
    const dataForm = {
      first_name: values.first_name,
      last_name: values.last_name,
      start_date: values.start_date.toISOString(),
      department: values.department,
      date_Of_Birth: values.date_Of_Birth.toISOString(),
      street: values.street,
      city: values.city,
      state: values.state,
      zip_code: values.zip_code,
    };

    dispatch(add(dataForm));
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
