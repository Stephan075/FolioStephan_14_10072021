import styles from "./CreateEmployee.module.scss";
import React from "react";
import FormInput from "../Form/FormInput/FormInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Controller } from "react-hook-form";
import FormSelect from "../Form/FormSelect/FormSelect";

const Fields = ({
  register,
  errors,
  control,
  states,
  departments,
  defaultValues,
}) => {
  return (
    <>
      <fieldset>
        <legend className="heading-4">Identity informations</legend>

        <FormInput
          register={register}
          id="lastName"
          label="Last Name"
          type="text"
          placeholder="Last Name"
          errors={errors.lastName}
        />

        <FormInput
          register={register}
          id="firstName"
          label="First Name"
          type="text"
          placeholder="First Name"
          errors={errors.firstName}
        />

        <div className="d-flex flex-column mb-20">
          {/* <label htmlFor="dateOfBirth">Date of Birth</label> */}
          <Controller
            control={control}
            name="dateOfBirth"
            render={({ field }) => (
              <DatePicker
                id="dateOfBirth"
                dateFormat="dd/MM/yyyy"
                placeholderText="Date of Birth"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </div>

        <div className="d-flex flex-column mb-20">
          {/* <label htmlFor="startDate">Date of Birth</label> */}
          <Controller
            control={control}
            name="startDate"
            render={({ field }) => (
              <DatePicker
                id="startDate"
                dateFormat="dd/MM/yyyy"
                placeholderText="Start Date"
                onChange={(date) => field.onChange(date)}
                selected={field.value}
              />
            )}
          />
        </div>
      </fieldset>

      <fieldset>
        <legend className="heading-4">Address</legend>

        <FormInput
          register={register}
          id="street"
          label="Street"
          placeholder="Street"
          errors={errors.street}
        />

        <FormInput
          register={register}
          id="city"
          label="City"
          placeholder="City"
          errors={errors.city}
        />

        <FormSelect
          register={register}
          id="state"
          label="States"
          options={states}
          value={defaultValues.state}
          errors={errors}
        />

        <FormInput
          register={register}
          id="zipCode"
          label="Zip code"
          type="number"
          placeholder="Zip code"
          errors={errors.zipCode}
          valueAsNumber={true}
        />
      </fieldset>

      <FormSelect
        register={register}
        id="department"
        label="Department"
        options={departments}
        value={defaultValues.department}
        errors={errors}
      />
    </>
  );
};

export default Fields;
