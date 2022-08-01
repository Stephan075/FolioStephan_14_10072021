import styles from "./Modal.module.scss";
import validateImg from "./img/undraw_superhero_kguv.svg";

const Modal = ({ currentData = "", setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${styles.modal}`}>
      <div className={`${styles.modalContent} `}>
        <div className={`${styles.modalImg} `}>
          <img src={validateImg} alt="validateImg" />
        </div>

        <div className={`${styles.text}`}>
          The employer <span>{`${currentData && currentData.firstName}`}</span>{" "}
          was created! Thank you 😀
        </div>

        <span className={`${styles.modalBtn} `} onClick={closeModal}>
          &#10006;
        </span>
      </div>
    </div>
  );
};

export default Modal;
