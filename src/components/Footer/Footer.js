import styles from "./Footer.module.scss";

/**
 * @description component that displays the footer
 * @returns { HTMLElement }
 */
const Footer = () => {
  return (
    <footer
      className={`${styles.footer} d-flex flex-row align-items-center justify-content-center p-20`}
    >
      <p>Copyright © 2022 HRnet, Inc.</p>
    </footer>
  );
};

export default Footer;
