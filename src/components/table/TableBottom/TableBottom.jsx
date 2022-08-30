import { useSelector } from "react-redux";
import { employeeSelector } from "../../../features/Employee/Employee.slice";
import styles from "./TableBottom.module.scss";
import PropTypes from "prop-types";

/**
 * @description Component that show prev next and the number of employees
 * @returns { HTMLElement }
 */
const TableBottom = ({
  page,
  getTableBodyProps,
  previousPage,
  nextPage,
  canNextPage,
  canPreviousPage,
  state,
}) => {
  // retrieve the employee list
  const usersData = useSelector(employeeSelector);

  const { pageIndex } = state;
  return (
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
  );
};

export default TableBottom;

TableBottom.propTypes = {
  page: PropTypes.array,
  getTableBodyProps: PropTypes.func,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func,
  canNextPage: PropTypes.bool,
  canPreviousPage: PropTypes.bool,
  state: PropTypes.object,
};
