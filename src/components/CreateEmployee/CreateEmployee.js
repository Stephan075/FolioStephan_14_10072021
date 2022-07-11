import React, { useEffect, useRef, useState } from "react";
import FormInput from "../Form/FormInput/FormInput";
import FormSelect from "../Form/FormSelect/FormSelect";

const CreateEmployee = () => {
  const firstNameRef = useRef();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const [error, setError] = useState({ message: "" });

  const {
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    street,
    city,
    state,
    zipCode,
    department,
  } = formData;

  useEffect(() => {
    console.log(department);
  }, [department]);

  // focus l'input FirstName
  //   useEffect(() => {
  //     firstNameRef.current.focus();
  //   }, []);

  const onChange = (e) => {
    setFormData((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <FormInput
            type="text"
            name="firstName"
            placeholder="FirstName"
            required={false}
            onChange={onChange}
            value={firstName}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="firstName">Last Name</label>
          <FormInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            required={false}
            onChange={onChange}
            value={lastName}
          />
        </div>

        <div className="input-wrapper">
          <div className="address-infos">
            <p className="heading-4">Address</p>
            <div className="block">
              <label htmlFor="firstName">Street</label>
              <FormInput
                type="text"
                name="street"
                placeholder="Street"
                required={false}
                onChange={onChange}
                value={street}
              />
            </div>

            <div className="block">
              <label htmlFor="firstName">City</label>
              <FormInput
                type="text"
                name="city"
                placeholder="City"
                required={false}
                onChange={onChange}
                value={city}
              />
            </div>

            <div className="block">
              <label htmlFor="State">State</label>
              <FormSelect
                label="States"
                options={states}
                name="state"
                onChange={onChange}
                value={state}
                required={false}
              />
            </div>

            <div className="block">
              <label htmlFor="zipCode">Zip Code</label>
              <FormInput
                type="number"
                name="zipCode"
                placeholder="Zip Code"
                required={false}
                onChange={onChange}
                value={zipCode}
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label htmlFor="department">Department</label>
            <FormSelect
              label="departments"
              options={departments}
              name="department"
              onChange={onChange}
              value={department}
              required={false}
            />
          </div>
        </div>

        <button className="save-button">Save</button>
      </form>
      {/* {error && <span className="error-message">{error.message}</span>} */}
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
