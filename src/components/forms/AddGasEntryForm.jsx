import React, { useEffect, useState, useRef } from "react";
import Input from "../shared/Input";
import GasStationDropdown from "../UI/GasStationDropdown";
import GasTypeDropdown from "../UI/GasTypeDropdown";
import GasLogEntry from "../../model/GasLogEntry";

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
  const littersRef = useRef();
  const priceRef = useRef();
  const kmRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();

  //Form validation
  const [validateFormFlag, setValidateFormFlag] = useState(0);
  const [formIsValid, setformIsValid] = useState(false);
  useEffect(() => {
    const identifier = setTimeout(() => {
      setformIsValid(
        gas.id != null &&
          gasType.id != null &&
          littersRef.current.isValid() === true &&
          priceRef.current.isValid() === true &&
          kmRef.current.isValid() === true &&
          startDateRef.current.isValid() === true &&
          endDateRef.current.isValid() === true
      );
    }, 500);
    return () => {
      //Esta función se ejecuta en la segunda vez que se accede al useeffect
      clearTimeout(identifier);
    };
  }, [gas, gasType, validateFormFlag]);

  const submitHandler = (event) => {
    event.preventDefault();
    const entry = {
      id: null,
      gas_type: gasType.id,
      gas_station: gas.id,
      litros: +littersRef.current.getValue(),
      costo: +priceRef.current.getValue(),
      distancia: +kmRef.current.getValue(),
      f_ini: new Date(startDateRef.current.getValue()),
      f_fin: new Date(endDateRef.current.getValue()),
    };
    GasLogEntry.add(entry);
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
      <Input
        ref={littersRef}
        label="Litros"
        type="number"
        errorMsg="Por favor proporcione un número de litros válido"
        validateForm={setValidateFormFlag}
      ></Input>
      <Input
        ref={priceRef}
        label="Costo (MXN)"
        type="number"
        errorMsg="Por favor introduzca un costo válido"
        validateForm={setValidateFormFlag}
      ></Input>
      <Input
        ref={kmRef}
        label="Kilometraje"
        type="number"
        errorMsg="Por favor introduzca un kilometraje válido"
        validateForm={setValidateFormFlag}
      ></Input>
      <Input
        ref={startDateRef}
        label="Fecha Inicio"
        type="date"
        errorMsg="Por favor introduzca una fecha de inicio válida"
        validateForm={setValidateFormFlag}
      ></Input>
      <Input
        ref={endDateRef}
        label="Fecha Fin"
        type="date"
        errorMsg="Por favor introduzca una fecha de fin válida"
        validateForm={setValidateFormFlag}
      ></Input>

      <button type="submit" className="btn btn-primary" disabled={!formIsValid}>
        Agregar
      </button>
    </form>
  );
}
