import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { employeeSelector } from "../../../features/Employee/Employee.slice";
import TableLayout from "../TableLayout/TableLayout";
// import MOCK_DATA from "../../_mocks_/MOCK_DATA.json";
import { COLUMNS } from "./columns";

/**
 * @description Component that show a table of employees
 * @returns { HTMLElement }
 */
const TableInstance = () => {
  // retrieve the employee list
  const usersData = useSelector(employeeSelector);
  // Get the data of employees
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => [...usersData], [usersData]);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    //  Search input
    useGlobalFilter,
    // Sort with columns
    useSortBy,
    // Pagination
    usePagination
  );

  return <TableLayout {...tableInstance} />;
};

export default TableInstance;
