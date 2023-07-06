import { createContext, useEffect, useState } from "react";

const CarContext = createContext();

//Create Provider

export const CarProvider = ({ children }) => {
  const [car, setCar] = useState([
    { id: 1, model: "Ikon 2012", brand: "Ford", tank_size: 40 },
  ]);

  useEffect(() => {
    fetchCars()
    
  }, []);

  //Fetch cars
  const fetchCars = async () => {
    const response = await fetch(
      `http://localhost:5000/cars?_sort=id&_order=desc`
    );
    const data = await response.json();
    setCar(data)
    console.log(data);
  };

  return (
    <CarContext.Provider
      value={{
        car,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export default CarContext;
