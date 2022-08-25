import PropTypes from "prop-types";

/**
 * @description Component that creates selects
 * @returns { HTMLElement }
 */
const FormSelect = ({ register, id, label, options, value, errors }) => {
  return (
    <div className="d-flex flex-column mb-20">
      <select {...register(id)} id={id}>
        <option value="" disabled>
          Choisissez un {label}
        </option>
        {options.map((o) => {
          return (
            <option
              value={o.abbreviation ? o.abbreviation : o.option}
              key={o.option}
            >
              {o.option}
            </option>
          );
        })}
      </select>
      {errors?.id && <p>{errors.id.message}</p>}
    </div>
  );
};

// register, id, label, options, value, errors

FormSelect.propTypes = {
  register: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  errors: PropTypes.object,
};

export default FormSelect;
