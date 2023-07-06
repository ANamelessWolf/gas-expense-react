import React from "react";

function YearPicker() {
  var years = [];
  for (var i = 2012; i <= 2023; i++) years.push(i);

  return (
    <select className="form-select">
      <option defaultValue>Selecciona el año del modelo</option>
      {years.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default YearPicker;
