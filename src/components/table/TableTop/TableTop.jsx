import SearchInput from "../../Form/SearchInput/SearchInput";
import styles from "./TableTop.module.scss";
import PropTypes from "prop-types";

/**
 * @description Component that displays the search bar and the number of users displayed per page
 * @returns { HTMLElement }
 */

const TableTop = ({ setGlobalFilter, setPageSize, state }) => {
  const { globalFilter, pageSize } = state;
  return (
    <div className={styles.topGroup}>
      <SearchInput filter={globalFilter} setFilter={setGlobalFilter} />

      <select
        className="styled-select"
        value={pageSize}
        onChange={(e) => setPageSize(e.target.value)}
      >
        {[10, 25, 50, 100].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TableTop;

TableTop.propTypes = {
  setGlobalFilter: PropTypes.func,
  setPageSize: PropTypes.func,
  state: PropTypes.object,
};
