import React from "react";
import { BsFillCarFrontFill } from "react-icons/bs";

export default function GasDistanceCard(props) {
  return (
    <div className="card rowCard">
      <div className="card-body">
        <h5 className="card-title">
          <BsFillCarFrontFill /> {props.distance + " [Km]"}
        </h5>
        <p className="card-text text-muted">
          Km/L: <b>{props.km_l} </b>
        </p>
      </div>
    </div>
  );
}
