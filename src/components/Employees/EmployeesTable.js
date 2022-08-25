import React, { useEffect, useState } from "react";

import BasicTable from "../table/BasicTable";

/**
 * @description Component that show a table of employees
 * @returns { HTMLElement }
 */
const EmployeesTable = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("dataEmployee")) || [];
    const copyData = [...data];
    const newAray = [];

    copyData.map((u) => {
      newAray.push({
        first_name: u.firstName,
        last_name: u.lastName,
        start_date: u.startDate,
        department: u.department,
        date_Of_Birth: u.dateOfBirth,
        street: u.street,
        city: u.city,
        state: u.state,
        zip_code: u.zipCode.toString(),
      });

      return newAray;
    });

    setUsersData(newAray);
  }, []);

  return <BasicTable usersData={usersData} />;
};

export default EmployeesTable;
