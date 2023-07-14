import { createContext, useEffect, useState } from "react";
import Http from "../utils/Http";
import GasStation from "../model/GasStation";
import GasLogEntry from "../model/GasLogEntry";

const AppContext = createContext({
  catalogue: {
    GAS_TYPE: [],
    VEHICLES: [],
  },
  fuel_sation: {
    data: [],
    refesh: () => {},
  },
  gas_log: {
    data: [],
    refesh: () => {},
    add: (data) => {},
  }
});

//Create Provider

export const AppProvider = (props) => {
  const [gasTypes, setGasTypes] = useState([]);
  const [gasStations, setGasStations] = useState([]);
  const [cars, setCars] = useState([]);
  const [gasLog, setGasLog] = useState([]);

  useEffect(() => {
    Http.GET("cars", (data) => setCars(() => data));
    Http.GET("gas_types", (data) => setGasTypes(() => data));
    GasStation.refresh(setGasStations);
    GasLogEntry.refresh(setGasLog);
  }, []);

  return (
    <AppContext.Provider
      value={{
        catalogue: {
          GAS_TYPE: gasTypes,
          VEHICLES: cars,
        },
        fuel_sation: {
          data: gasStations,
          refesh: () => GasStation.refresh(setGasStations),
        },
        gas_log: {
          data: gasLog,
          refesh: () => GasLogEntry.refresh(setGasLog),
          add: GasLogEntry.add,
        },
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
