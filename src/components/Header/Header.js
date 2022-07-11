import styles from "./Header.module.scss";
import HRnetLogo from "../../assets/images/HRnet_Logo.jpg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    <header
      className={`${styles.header} d-flex flex-row 
  align-items-center`}
    >
      <div className="flex-fill">
        <div className={`${styles.logo}`}>HRnet</div>
      </div>
      <ul>
        {location.pathname === "/employeeList" ? (
          <Link to="/" className="link">
            <button className="btn btn-primary">
              <i className="fa-solid fa-users mr-5"></i>
              <span>Home</span>
            </button>
          </Link>
        ) : (
          <Link to="employeeList" className="link">
            <button className="btn btn-primary">
              <i className="fa-solid fa-users mr-5"></i>
              <span>View Current Employees</span>
            </button>
          </Link>
        )}
      </ul>
    </header>
  );
};

export default Header;
