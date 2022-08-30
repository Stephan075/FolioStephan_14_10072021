import PropTypes from "prop-types";

/**
 * @description Component that show a input search for the employees table
 * @returns { HTMLElement }
 */
const SearchInput = ({ filter, setFilter }) => {
  const handleInput = (e) => {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  };

  return (
    <input
      className="search-table br"
      placeholder="Search ..."
      value={filter || ""}
      onInput={handleInput}
    />
  );
};

SearchInput.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
};

export default SearchInput;
