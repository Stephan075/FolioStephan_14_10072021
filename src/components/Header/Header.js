import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";

/**
 * @description component that displays the Header
 * @returns { HTMLElement }
 */
const Header = () => {
  const location = useLocation();
  return (
    <header
      className={`${styles.header} d-flex flex-row 
  align-items-center`}
    >
      <div className="flex-fill">
        <Link className="" to="./">
          <div className={`${styles.logo}`}>HRnet</div>
        </Link>
      </div>
      <div className="cta">
        {location.pathname === "/employeeList" ? (
          <Link to="./" className="link">
            <button className="btn btn-primary">
              <i className="fa-solid fa-users mr-5"></i>
              <span>Home</span>
            </button>
          </Link>
        ) : (
          <Link to="./employeeList" className="link">
            <button className="btn btn-primary">
              <i className="fa-solid fa-users mr-5"></i>
              <span>View Current Employees</span>
            </button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
