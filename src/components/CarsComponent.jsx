import React from "react";
import { useContext  } from "react";
import CarRow from "./CarRow";
import  AppContext  from "../context/AppContext";

export default function CarsComponent() {
  const title = "Vehicles";
  const {car } = useContext(AppContext)

  const loading = false;

  const cars = car;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <br />
      <h1>{title.toUpperCase()}</h1>
      <br />

      <div className="d-flex p-2 bd-highlight">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Model</th>
              <th scope="col">Brand</th>
              <th scope="col">Tank Size [l]</th>
              {/* Actions */}
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cars.map((item, index) => (
              <CarRow
                key={index}
                car={item}
                handleDelete={(id) => console.log(id)}
              />
            ))}
          </tbody>
        </table>
      </div>
      <h4>Vehicles({cars.length})</h4>
    </div>
  );
}
