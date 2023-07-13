import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";

export default function GasStationDropdown(props) {
  const ctx = useContext(AppContext);

  const [selected, setSelected] = useState(null);
  const selectionChangeHandler = (event) => {
    const id = +event.target.value;
    const gasStation = ctx.fuel_sation.data.filter((item) => item.id === id)[0];
    setSelected(gasStation);
    if (props.selectionChanged != null) {
      props.selectionChanged(gasStation);
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
        <option value="0">Selecciona una gasolinera</option>
        {ctx.fuel_sation.data.map((item) => {
          return (
            <option key={item.id} value={item.id}>
              {item.station_name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
