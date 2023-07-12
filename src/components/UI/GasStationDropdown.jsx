import React, { useEffect, useState } from "react";
import Http from "../../utils/Http";
export default function GasStationDropdown(props) {
  const [gasStations, setGasStations] = useState([]);
  const [selected, setSelected] = useState(null);
  const selectionChangeHandler = (event) => {
    const id = +event.target.value;
    const gasStation = gasStations.filter((item) => item.id === id)[0];
    setSelected(gasStation);
    if (props.selectionChanged != null) {
      props.selectionChanged(gasStation);
    }
  };

  useEffect(
    () =>
      Http.GET("gas_stations", (data) =>
        setGasStations(() => {
          const compare = (a, b) => {
            if (a.station_name < b.station_name) {
              return -1;
            }
            if (a.station_name > b.station_name) {
              return 1;
            }
            return 0;
          };
          return data.sort(compare);
        })
      ),
    []
  );

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
        {gasStations.map((item) => {
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
