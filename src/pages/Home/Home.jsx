import React from "react";
import CreateEmployee from "../../components/CreateEmployee/CreateEmployee";

/**
 * @description Component that displays the employee creation page
 * @returns { HTMLElement }
 */
const Home = () => {
  return (
    <div className={`blockContainer d-flex flex-column`}>
      <div className="flex-fill container">
        <h1 className="heading-2 my-30">Create Employee</h1>

        <div className="homeForm">
          <CreateEmployee />
        </div>
      </div>
    </div>
  );
};

export default Home;
