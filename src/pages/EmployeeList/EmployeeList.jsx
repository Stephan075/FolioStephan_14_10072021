import EmployeesTable from "../../components/Employees/EmployeesTable";

/**
 * @description Component that displays the Employee list page
 * @returns { HTMLElement }
 */
const EmployeeList = () => {
  return (
    <div className={`blockContainer d-flex flex-column br`}>
      <div className="flex-fill container">
        <h1 className="heading-2 my-30">Current Employees</h1>
        <div className="employeeList" style={{ padding: "0 15px" }}>
          <EmployeesTable />
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
