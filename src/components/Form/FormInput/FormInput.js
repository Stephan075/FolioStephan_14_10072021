import styles from "./FormInput.module.scss";

const FormInput = ({ type, name, placeholder, required, onChange, value }) => {
  return (
    <input
      className="inputForm"
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInput;
