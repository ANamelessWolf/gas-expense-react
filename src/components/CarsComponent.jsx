import React from "react";

import CarRow from "./CarRow";

export default function CarsComponent() {
  const title = "Vehicles";
  
  const loading = false;

  const cars = [
    { id: 1, model: "Ikon 2012", brand: "Ford", tank_size: 40 },
    { id: 2, model: "Corolla 2022", brand: "Toyota", tank_size: 42 },
  ];

  if(loading) return <h1>Loading...</h1>
  

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
            </tr>
          </thead>
          <tbody>
            {cars.map((item, index) => (
              <CarRow key={index} car={item}/>
            ))}
          </tbody>
        </table>
      </div>
        <h4>Vehicles({cars.length})</h4>
    </div>
  );
}
