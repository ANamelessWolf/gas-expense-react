import React, { useState, useContext } from "react";
import AppContext from "../../context/AppContext";

export default function GasTypeDropdown(props) {
  const ctx = useContext(AppContext);

  const [selected, setSelected] = useState(null);
  const selectionChangeHandler = (event) => {
    const id = +event.target.value;
    const gasType = ctx.catalogue.GAS_TYPE.filter((item) => item.id === id)[0];
    setSelected(gasType);
    if (props.selectionChanged != null) {
      props.selectionChanged(gasType);
    }
  };

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
        {ctx.catalogue.GAS_TYPE.map((item) => {
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
