import React from "react";
import { BsCash } from "react-icons/bs";

export default function GasExpenseCard(props) {
  return (
    <div className="card rowCard">
      <div className="card-body">
        <h5 className="card-title">
          <BsCash /> {props.expense}
        </h5>
        <p className="card-text text-muted">
          Km($): <b>{props.costo_l}</b>
        </p>
      </div>
    </div>
  );
}
