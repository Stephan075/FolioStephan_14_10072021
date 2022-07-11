import styles from "./Header.module.scss";
import HRnetLogo from "../../assets/images/HRnet_Logo.jpg";

const Header = () => {
  return (
    <header
      className={`${styles.header} d-flex flex-row 
  align-items-center`}
    >
      <div className="flex-fill">
        <div className={`${styles.logo}`}>HRnet</div>
      </div>
      <ul>
        <button className="btn btn-primary">
          <i className="fa-solid fa-users mr-5"></i>
          <span>View Current Employees</span>
        </button>
      </ul>
    </header>
  );
};

export default Header;
