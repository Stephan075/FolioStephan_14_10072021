import styles from "./FormSelect.module.scss";

const FormSelect = ({ options, name, onChange, value }) => {
  return (
    <select name={name} id={name} value={value} onChange={onChange}>
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
  );
};

export default FormSelect;
