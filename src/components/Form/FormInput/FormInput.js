import styles from "./FormInput.module.scss";

const FormInput = ({
  register,
  id,
  label,
  type = "text",
  placeholder,
  errors,
}) => {
  return (
    <div className="form-group d-flex flex-column mb-20">
      {/* <label className="mb-5" htmlFor={id}>
        {label}
      </label> */}
      <input
        {...register(id, {})}
        id={id}
        type={type}
        placeholder={placeholder}
      />
      {errors && <p>{errors.message}</p>}
    </div>
  );
};

export default FormInput;
