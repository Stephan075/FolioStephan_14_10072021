import styles from "./FormSelect.module.scss";

const FormSelect = ({ register, id, label, options, value, errors }) => {
  return (
    <div className="d-flex flex-column mb-20">
      {/* <label className="mb-5" htmlFor={id}>
        {label}
      </label> */}
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

export default FormSelect;
