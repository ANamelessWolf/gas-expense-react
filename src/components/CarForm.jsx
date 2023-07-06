import React, { useState } from "react";
import Button from "./shared/Button";
import YearPicker from "./shared/YearPicker";

function CarForm(action) {
  var message, btn;
  if (action == "Add") {
    message = "Fill the data to add a new car";
    btn = "Add";
  } else {
    message = "Review the car data to update";
    btn = "Update";
  }

  const [carModel, setCarModel] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carTank, setCarTank] = useState("");

  const [btnDisables, setBtnDisabled] = useState(true);
  const [btnValMessage, setbtnValMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const car = { model: carModel, brand: carBrand, tank_size: carTank };
    console.log(car);
  };

  const handleInputValidation = (e) => {
    if (e.target.id === "carModel") setCarModel(e.target.value);
    if (e.target.id === "carBrand") setCarBrand(e.target.value);
    if (e.target.id === "carTank") setCarTank(e.target.value);

    if (e.target.value === "") {
      setBtnDisabled(true);
      setbtnValMessage("Todos los campos son obligatorios");
    } else if (carBrand !== "" && carModel !== "" && carTank !== "") {
      setBtnDisabled(false);
      setbtnValMessage("");
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>{message}</h2>
      <br />
      <div className="mb-3">
        <label htmlFor="carModel" className="form-label">
          Car model
        </label>
        <YearPicker />
        <input
          onChange={handleInputValidation}
          type="text"
          className="form-control"
          id="carModel"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="carBrand" className="form-label">
          Car brand
        </label>
        <input
          onChange={handleInputValidation}
          type="text"
          className="form-control"
          id="carBrand"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="carTank" className="form-label">
          Car tank size
        </label>
        <input
          onChange={handleInputValidation}
          type="number"
          className="form-control"
          id="carTank"
        />
      </div>
      <Button type="submit" version="primary" isDisabled={btnDisables}>
        {btn}
      </Button>
      {btnValMessage && <div className="message"></div>}
    </form>
  );
}

export default CarForm;
