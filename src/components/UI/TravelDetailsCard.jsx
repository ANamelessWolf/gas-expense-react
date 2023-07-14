import React from "react";
import { BsFillCalendarFill } from "react-icons/bs";

export default function TravelDetailsCard(props) {
  return (
    <div className="card rowCard">
      <div className="card-body">
        <h5 className="card-title">
          <BsFillCalendarFill /> {"Del " + props.start + " al " + props.end}
        </h5>
        <p className="card-text text-muted">
          Días: <b>{props.days}</b>
        </p>
      </div>
    </div>
  );
}
