import { useState } from "react";
import styles from "./SearchInput.module.scss";
import { useForm } from "react-hook-form";

const SearchInput = ({ filter, setFilter }) => {
  const handleInput = (e) => {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  };

  return (
    <input
      className="search-table"
      placeholder="Search ..."
      value={filter || ""}
      onInput={handleInput}
    />
  );
};

export default SearchInput;
