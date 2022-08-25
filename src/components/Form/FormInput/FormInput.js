import PropTypes from "prop-types";

/**
 * @description Component that creates input fields
 * @returns { HTMLElement }
 */
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

FormInput.propTypes = {
  register: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.object,
};

export default FormInput;
