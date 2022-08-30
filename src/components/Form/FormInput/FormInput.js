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
      <input
        {...register(id, {})}
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
      />
      {errors && (
        <div role="alert" className="text-danger">
          {errors.message}
        </div>
      )}
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
