import { useState } from "react";
import EmployeesTable from "../../components/Employees/EmployeesTable";
import SearchInput from "../../components/Form/SearchInput/SearchInput";
import styles from "./EmployeeList.module.scss";

const EmployeeList = () => {
  const [filter, setFilter] = useState("");

  return (
    <div className={`blockContainer d-flex flex-column br`}>
      <div className="flex-fill container">
        <h1 className="heading-2 my-30">Current Employees</h1>
        <div className="employeeList" style={{ padding: "0 15px" }}>
          <EmployeesTable filter={filter} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
