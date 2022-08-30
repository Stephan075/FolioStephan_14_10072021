import TableBottom from "../TableBottom/TableBottom";
import TableTop from "../TableTop/TableTop";
import PropTypes from "prop-types";

/**
 * @description Component that show a table of employees
 * @returns { HTMLElement }
 */
const TableLayout = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  prepareRow,
  state,
  setGlobalFilter,
  page,
  previousPage,
  nextPage,
  canNextPage,
  canPreviousPage,
  setPageSize,
}) => {
  return (
    <>
      {/* search and select Show */}
      <TableTop
        setGlobalFilter={setGlobalFilter}
        setPageSize={setPageSize}
        state={state}
      />
      {/* table layouts */}
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
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })) || (
            <tr className="">
              <td className="responsiveTable__body__text">
                No data available in table
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* prev next  */}
      <TableBottom
        page={page}
        getTableBodyProps={getTableBodyProps}
        previousPage={previousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        state={state}
      />
    </>
  );
};

TableLayout.propTypes = {
  getTableProps: PropTypes.func,
  getTableBodyProps: PropTypes.func,
  headerGroups: PropTypes.array,
  prepareRow: PropTypes.func,
  state: PropTypes.object,
  setGlobalFilter: PropTypes.func,
  page: PropTypes.array,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func,
  canNextPage: PropTypes.bool,
  canPreviousPage: PropTypes.bool,
  setPageSize: PropTypes.func,
};

export default TableLayout;
