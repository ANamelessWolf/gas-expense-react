import React from "react";

function CarRow({car}) {
  return (
    <tr>
      <th scope="row">{car.id}</th>
      <td>{car.model}</td>
      <td>{car.brand}</td>
      <td>{car.tank_size}</td>
    </tr>
  );
}

export default CarRow;
