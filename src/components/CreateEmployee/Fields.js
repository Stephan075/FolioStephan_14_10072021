// eslint-disable-next-line
import "./CreateEmployee.module.scss";
import PropTypes from "prop-types";

import FormInput from "../Form/FormInput/FormInput";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { Controller } from "react-hook-form";
import FormSelect from "../Form/FormSelect/FormSelect";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
/**
 * @description component that groups the forms
 * @returns { HTMLElement }
 */

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
          id="last_name"
          label="Last Name"
          type="text"
          placeholder="Last Name"
          errors={errors.last_name}
        />

        <FormInput
          register={register}
          id="first_name"
          label="First Name"
          type="text"
          placeholder="First Name"
          errors={errors.first_name}
        />

        <div className="d-flex flex-column mb-20">
          {/* <label htmlFor="dateOfBirth">Date of Birth</label> */}
          <Controller
            control={control}
            name="date_Of_Birth"
            type="number"
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  id="date_Of_Birth"
                  label="Date of Birth"
                  value={field.value}
                  onChange={(date) => field.onChange(date)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            )}
          />
          {errors && (
            <div role="alert" className="text-danger">
              {errors.date_Of_Birth?.message}
            </div>
          )}
        </div>

        <div className="d-flex flex-column mb-20">
          {/* <label htmlFor="startDate">Date of Birth</label> */}
          <Controller
            control={control}
            name="start_date"
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  id="start_date"
                  label="Start Date"
                  value={field.value}
                  onChange={(date) => field.onChange(date)}
                  pl
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            )}
          />
          {errors && (
            <div role="alert" className="text-danger">
              {errors.start_date?.message}
            </div>
          )}
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
          id="zip_code"
          label="Zip code"
          type="number"
          placeholder="Zip code"
          errors={errors.zip_code}
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

Fields.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  control: PropTypes.object,
  states: PropTypes.array,
  departments: PropTypes.array,
  defaultValues: PropTypes.object,
};

export default Fields;
