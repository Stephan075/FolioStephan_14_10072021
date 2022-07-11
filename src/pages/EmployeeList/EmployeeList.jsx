import styles from "./EmployeeList.module.scss";

const EmployeeList = () => {
  return (
    <div className={`blockContainer d-flex flex-column`}>
      <div className="flex-fill container">
        <h1 className="heading-2 my-30">Current Employees</h1>
      </div>
    </div>
  );
};

export default EmployeeList;
