import React, { useEffect, useState } from "react";
import Http from "../../utils/Http";
export default function GasTypeDropdown(props) {
  const [gasTypes, setGasTypes] = useState([]);
  const [selected, setSelected] = useState(null);
  const selectionChangeHandler = (event) => {
    const id = +event.target.value;
    const gasType = gasTypes.filter((item) => item.id === id)[0];
    setSelected(gasType);
    if (props.selectionChanged != null) {
      props.selectionChanged(gasType);
    }
  };

  useEffect(() => Http.GET("gas_types", (data) => setGasTypes(() => data)), []);

  return (
    <div className="mb-3">
      <label htmlFor="disabledSelect" className="form-label">
        {props.label}
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={selectionChangeHandler}
        value={selected?.id}
      >
        <option value="0">Selecciona un tipo de gasolina</option>
        {gasTypes.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.gas_name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
