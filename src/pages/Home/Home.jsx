import React from "react";
import styles from "./Home.module.scss";
import Content from "../../components/Content/Content";
import CreateEmployee from "../../components/CreateEmployee/CreateEmployee";

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
