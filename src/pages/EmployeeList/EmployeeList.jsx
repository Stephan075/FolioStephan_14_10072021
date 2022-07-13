import { useState } from "react";
import EmployeesTable from "../../components/Employees/EmployeesTable";
import styles from "./EmployeeList.module.scss";

const EmployeeList = () => {
  const [employeesData, setEmployeesData] = useState([]);
  return (
    <div className={`blockContainer d-flex flex-column br`}>
      <div className="flex-fill container">
        <h1 className="heading-2 my-30">Current Employees</h1>
        <div className="employeeList" style={{ padding: "0 15px" }}>
          <EmployeesTable employeesData={employeesData} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
