import React from "react";
import { FaTimes } from "react-icons/fa";

function CarRow({ car, handleDelete }) {

  return (
    <tr>
      <th scope="row">{car.id}</th>
      <td>{car.model}</td>
      <td>{car.brand}</td>
      <td>{car.tank_size}</td>
      <td>
        <button onClick={handleDelete} className="btn btn-danger">
          <FaTimes /> DELETE
        </button>
      </td>
    </tr>
  );
}

export default CarRow;
