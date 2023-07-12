import React, { useEffect, useState } from "react";
import Inputbox from "../UI/Inputbox";
import GasStationDropdown from "../UI/GasStationDropdown";
import GasTypeDropdown from "../UI/GasTypeDropdown";
import Http from "../../utils/Http";

export default function AddGasEntryForm() {
  const [gas, setGas] = useState({
    id: null,
    gas_name: "",
  });
  const [gasType, setGasType] = useState({
    id: null,
    station_name: "",
    location: "",
    rating: 1,
  });
  const [liters, setLiters] = useState("");
  const [price, setPrice] = useState("");
  const [km, setKm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  //Form validation
  const [formIsValid, setformIsValid] = useState(false);
  useEffect(() => {
    const identifier = setTimeout(() => {
      setformIsValid(
        gas.id != null &&
          gasType.id != null &&
          liters.length > 0 &&
          price.length > 0 &&
          km.length > 0 &&
          startDate.length > 0 &&
          endDate.length > 0
      );
    }, 500);
    return () => {
      //Esta función se ejecuta en la segunda vez que se accede al useeffect
      clearTimeout(identifier);
    };
  }, [gas, gasType, liters, price, km, startDate, endDate]);

  const submitHandler = (event) => {
    event.preventDefault();
    const entry = {
      id: null,
      gas_type: gasType.id,
      gas_station: gas.id,
      litros: +liters,
      costo: +price,
      distancia: +km,
      f_ini: new Date(startDate),
      f_fin: new Date(endDate),
    };
    Http.POST("gas_drive_logging", entry,(data)=>console.log(data));
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <GasStationDropdown
        label="Gasolinera"
        selectionChanged={setGas}
      ></GasStationDropdown>
      <GasTypeDropdown
        label="Tipo de gasolina"
        selectionChanged={setGasType}
      ></GasTypeDropdown>
      <Inputbox
        label="Litros"
        type="number"
        setValue={setLiters}
        errorMsg="Por favor proporcione un número de litros válido"
      ></Inputbox>
      <Inputbox
        label="Costo (MXN)"
        type="number"
        setValue={setPrice}
        errorMsg="Por favor introduzca un costo válido"
      ></Inputbox>
      <Inputbox
        label="Kilometraje"
        type="number"
        setValue={setKm}
        errorMsg="Por favor introduzca un kilometraje válido"
      ></Inputbox>
      <Inputbox
        label="Fecha Inicio"
        type="date"
        setValue={setStartDate}
        errorMsg="Por favor introduzca una fecha de inicio válida"
      ></Inputbox>
      <Inputbox
        label="Fecha Fin"
        type="date"
        setValue={setEndDate}
        errorMsg="Por favor introduzca una fecha de fin válida"
      ></Inputbox>

      <button type="submit" className="btn btn-primary" disabled={!formIsValid}>
        Agregar
      </button>
    </form>
  );
}
