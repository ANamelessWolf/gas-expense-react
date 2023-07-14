import React from "react";
import { BsFillXCircleFill, BsPencilFill } from "react-icons/bs";

export default function TableCRUDButtons(props) {
  return (
    <div className="btn-group" style={{ marginBottom: "15%" }}>
      <button className="btn" onClick={props.EditHandler}>
        <h2>
          <BsPencilFill className="text-warning" />
        </h2>
      </button>
      <button className="btn">
        <h2>
          <BsFillXCircleFill
            className="text-danger"
            onClick={props.DeleteHandler}
          />
        </h2>
      </button>
    </div>
  );
}
