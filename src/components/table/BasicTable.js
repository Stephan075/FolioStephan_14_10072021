import React, { useMemo } from "react";
import styles from "./BasicTable.module.scss";

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import SearchInput from "../Form/SearchInput/SearchInput";

// Instance de table
const BasicTable = ({ usersData }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => usersData, [usersData]);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className={styles.topGroup}>
        <SearchInput filter={globalFilter} setFilter={setGlobalFilter} />

        <label htmlFor="">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value)}
          >
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </label>
      </div>

      <table className="responsiveTable" {...getTableProps()}>
        {/* <!-- Responsive Table Header Section --> */}
        <thead className="responsiveTable__head">
          {headerGroups.map((headerGroup) => (
            <tr
              className="responsiveTable__row"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="responsiveTable__head__title mr-5"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : "↕️"}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* <!-- Responsive Table Body Section --> */}
        <tbody className="responsiveTable__body" {...getTableBodyProps()}>
          {(page.length > 0 &&
            page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="responsiveTable__row">
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="responsiveTable__body__text responsiveTable__body__text--firstName "
                        data-title={cell.render("Header")}
                      >
                        {console.log("cell", cell)}
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })) || (
            <tr className="">
              <td className="responsiveTable__body__text">
                No results found for
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={`mb-20 ${styles.footerGroups}`}>
        <p {...getTableBodyProps}>
          Showing
          {page.length > 0
            ? " " +
              (page.length * pageIndex + 1) +
              " to " +
              page.length * (pageIndex + 1) +
              " of " +
              usersData.length +
              " "
            : " 0 "}
          entries
        </p>

        <div className="btn_nextAndPrev">
          <button
            className={`btn mr-15 ${canPreviousPage ? "btn-primary" : ""}`}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <button
            className={`btn ${canNextPage ? "btn-primary" : ""}`}
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default BasicTable;
