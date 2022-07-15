import React from "react";

const Modal = ({ children, titleTxt, setIsOpen }) => {
  return (
    <div className="modal">
      <div className="container">
        <h3>{titleTxt}</h3>
        {children}
        <span className="close" onClick={() => setIsOpen(false)}>
          &#10006;
        </span>
      </div>
    </div>
  );
};

export default Modal;
