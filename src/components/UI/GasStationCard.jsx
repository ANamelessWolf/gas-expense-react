import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";

export default function GasStationCard(props) {
  const color =
    props.gasType === "PREMIUM"
      ? "text-danger"
      : propTypes.gasType === "MAGNA"
      ? "text-success"
      : "text-primary";

  return (
    <div className="card rowCard">
      <div className="card-body">
        <h5 className="card-title">
          <BsFillFuelPumpDieselFill /> {props.gasStation}
        </h5>
        <h6 className={"card-subtitle mb-2 " + color}>
          <b>{props.gasType}</b>
        </h6>
        <p className="card-text text-muted">
          Precio: <b>{props.price}</b>
        </p>
      </div>
    </div>
  );
}
