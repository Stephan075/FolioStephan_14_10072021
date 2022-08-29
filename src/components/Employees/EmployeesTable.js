import React, { useEffect, useState } from "react";
import { employeeSelector } from "../../features/Employee/Employee.slice";
import { useSelector } from "react-redux";

import BasicTable from "../table/BasicTable";

/**
 * @description Component that show a table of employees
 * @returns { HTMLElement }
 */
const EmployeesTable = () => {
  // retrieve the employee list
  const usersData = useSelector(employeeSelector);

  return <BasicTable usersData={usersData} />;
};

export default EmployeesTable;
