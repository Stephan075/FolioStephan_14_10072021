import styles from "./EmployeesTable.module.scss";

import React, { useEffect, useState } from "react";

const EmployeesTable = ({ filter }) => {
  const [title, setTitle] = useState(true);
  const [usersData, setUsersData] = useState([]);

  /**
   * localStorage data
   */
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("dataEmployee"));
    const copyData = [...data];
    const newAray = [];

    copyData.map((u) => {
      newAray.push({
        firstName: u.firstName,
        lastName: u.lastName,
        startDate: new Date(u.startDate).toLocaleDateString(),
        department: u.department,
        dateOfBirth: new Date(u.dateOfBirth).toLocaleDateString(),
        street: u.street,
        city: u.city,
        state: u.state,
        zipCode: u.zipCode.toString(),
      });

      return newAray;
    });

    setUsersData(newAray);
  }, []);

  const keys = [
    "firstName",
    "lastName",
    "dateOfBirth",
    "startDate",
    "street",
    "city",
    "state",
    "zipCode",
    "department",
  ];
  // console.log(usersData[0]["firstName"]);
  const filterData = (usersData) => {
    return usersData.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(filter))
    );
  };

  return (
    <table className="responsiveTable ">
      {/* <!-- Responsive Table Header Section --> */}
      <thead className="responsiveTable__head">
        <tr className="responsiveTable__row">
          {tableHead.map((headCell) => (
            <th key={headCell.id} className="responsiveTable__head__title mr-5">
              {headCell.label}
            </th>
          ))}
        </tr>
      </thead>

      {/* <!-- Responsive Table Body Section --> */}
      <tbody className="responsiveTable__body">
        {filterData(usersData).map((u, i) => (
          <tr key={i} className="responsiveTable__row">
            {/* {console.log(Object.values(u))} */}

            {title &&
              Object.values(u).map((v, i) => (
                <React.Fragment key={i}>
                  <td
                    className="responsiveTable__body__text responsiveTable__body__text--firstName "
                    data-title={tableHead[i].label}
                  >
                    <span>{v}</span>
                  </td>
                </React.Fragment>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const tableHead = [
  { label: "First Name", id: "firstName" },
  { label: "Last Name", id: "lastName" },
  { label: "Start Date", id: "startDate" },
  { label: "Department", id: "department" },
  { label: "Date of Birth", id: "dateOfBirth" },
  { label: "Street", id: "street" },
  { label: "City", id: "city" },
  { label: "State", id: "state" },
  { label: "Zip Code", id: "zipCode" },
];

const mocksUser = [
  {
    firstName: "David",
    lastName: "Miller",
    dateOfBirth: "12/08/1990",
    startDate: "01/15/2000",
    street: "Paris",
    city: "Nord",
    state: "aaaaa",
    zipCode: "45445",
    department: "Lp",
  },
  {
    firstName: "ddd",
    lastName: "Miller",
    dateOfBirth: "12/08/1990",
    startDate: "01/15/2000",
    street: "Paris",
    city: "Nord",
    state: "aaaaa",
    zipCode: "45445",
    department: "Lp",
  },
  {
    firstName: "bbbb",
    lastName: "Miller",
    dateOfBirth: "12/08/1990",
    startDate: "01/15/2000",
    street: "Paris",
    city: "Nord",
    state: "aaaaa",
    zipCode: "45445",
    department: "Lp",
  },
  {
    firstName: "aaaa",
    lastName: "Miller",
    dateOfBirth: "12/08/1990",
    startDate: "01/15/2000",
    street: "Paris",
    city: "Nord",
    state: "aaaaa",
    zipCode: "45445",
    department: "Lp",
  },
];
export default EmployeesTable;
